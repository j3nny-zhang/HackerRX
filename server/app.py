from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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