from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, Flask!</p>"

@app.route("/api/prescriptions/")
def get_prescriptions():
    return {
      "name": "caffeine",
      "dose": "1 cup",
      "frequency": "daily"
    }