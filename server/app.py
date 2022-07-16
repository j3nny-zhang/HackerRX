from db import PrescriptionStore
from flask import Flask, jsonify, request
from flask_cors import CORS
from ocr import OCR
from pprint import pprint
from werkzeug.utils import secure_filename
import os


UPLOAD_FOLDER = 'images'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)


db = PrescriptionStore()

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
        entities = ocr.parse(result)
        return jsonify(entities), 200

@app.route("/api/prescriptions/")
def get_prescriptions():
    """Returns a list of all prescriptions."""
    print("get_prescriptions")
    prescriptions = db['Cluster0']['prescriptions']
    for prescription in prescriptions.find():
        pprint(prescription)
    return 200


if __name__ == '__main__':
    print("Starting server...")
    app.run(host='0.0.0.0', port=5000)
