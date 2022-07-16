from flask import Flask, request
from flask_cors import CORS
from ocr import OCR
from werkzeug.utils import secure_filename
import os


UPLOAD_FOLDER = 'images'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/api/images/upload", methods=['POST'])
def upload_image():
    console.log("test")
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
        response = ocr.detect(path)
        text = ""
        for item in response["Blocks"]:
            if item["BlockType"] == "LINE":
                text += item["Text"] + "\n"
        return text


@app.route("/api/prescriptions/")
def get_prescriptions():
    response = {
        "name": "caffeine",
        "dose": "1 cup",
        "frequency": "daily"
    }
    return response


if __name__ == '__main__':
    print("Starting server...")
    app.run(host='0.0.0.0', port=5000)
