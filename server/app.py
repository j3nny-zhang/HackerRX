from flask import Flask


app = Flask(__name__)

@app.route("/api/prescriptions/")
def get_prescriptions():
    response = {
      "name": "caffeine",
      "dose": "1 cup",
      "frequency": "daily"
    }
    return response

if __name__ == '__main__':
    app.run(host='localhost', port=5000)