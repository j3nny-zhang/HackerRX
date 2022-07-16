from encoder import PrescriptionEncoder
from flask import Flask, jsonify, request
from flask_cors import CORS
from ocr import OCR
from pprint import pprint
from pymongo import MongoClient
from werkzeug.utils import secure_filename
import os


UPLOAD_FOLDER = 'images'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.json_encoder = PrescriptionEncoder
CORS(app)


client = MongoClient(os.environ.get('DATABASE_URL'))
db = client.prescriptiondb


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/api/images/upload", methods=['POST'])
def upload_image():
    """Saves image to local filesystem and performs OCR on it."""

    if 'file' not in request.files:
        return 'No file part', 400

    file = request.files['file']

    if file.filename == '':
        return 'No file selected', 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(path)
        ocr = OCR()
        result = ocr.detect(path)
        prescriptions = ocr.parse(result)
        db.prescriptions.insert_many(prescriptions)
        return jsonify(prescriptions), 200


@app.route("/api/prescriptions/")
def get_prescriptions():
    """Returns a list of all prescriptions."""
    prescriptions = db.prescriptions
    response = []
    for prescription in prescriptions.find():
        response.append(prescription)
    return jsonify(prescription), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
