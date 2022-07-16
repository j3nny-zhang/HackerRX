from db import client
from encoder import PrescriptionEncoder
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_login import LoginManager, current_user, login_required, login_user, logout_user
from ocr import OCR
from pprint import pprint
from user import User
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename

import os


UPLOAD_FOLDER = 'images'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.json_encoder = PrescriptionEncoder
app.secret_key = os.environ.get("SECRET_KEY")
CORS(app)

# Configure Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)


def allowed_file(filename):
    """Checks if the file is an allowed file type."""
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@login_manager.user_loader
def load_user(user_id):
    """Callback function for Flask-Login."""
    return User.get(user_id)


@app.route("/auth/signup", methods=["POST"])
def signup():
    email = request.form.get("email")
    name = request.form.get("name")
    password = request.form.get("password")

    user = User.get_by_email(email)

    if user:
        return jsonify({"error": "User already exists."}), 400

    client.userdb.users.insert_one({
        "email": email,
        "name": name,
        "password": generate_password_hash(password)
    })

    return jsonify({"success": "User created."}), 201


@app.route("/auth/login", methods=["POST"])
def login():
    """Logs in a user."""
    email = request.form.get("email")
    password = request.form.get("password")

    user = User.get_by_email(email)
    if not user or not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid credentials."}), 401

    login_user(user)

    return jsonify({"success": True}), 200


@app.route("/auth/logout")
@login_required
def logout():
    logout_user()
    return jsonify({"success": True}), 200


@app.route("/api/images/upload", methods=['POST'])
@login_required
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
        for prescription in prescriptions:
            prescription["userId"] = current_user.get_id()
        client.prescriptiondb.prescriptions.insert_many(prescriptions)
        return jsonify(prescriptions), 200


@app.route("/api/prescriptions/")
@login_required
def get_prescriptions():
    """Returns a list of all prescriptions."""
    prescriptions = client.prescriptiondb.prescriptions
    response = []
    for prescription in prescriptions.find():
        response.append(prescription)
    return jsonify(prescription), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
