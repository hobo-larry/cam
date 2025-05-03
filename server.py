from flask import Flask, request, jsonify
import cv2
import numpy as np

app = Flask(__name__)

@app.route("/process", methods=["POST"])
def process():
    # Decode image
    file = request.files["image"]
    img = np.frombuffer(file.read(), np.uint8)
    img = cv2.imdecode(img, cv2.IMREAD_COLOR)

    # Example: convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, encoded = cv2.imencode(".jpg", gray)
    return encoded.tobytes(), 200, {"Content-Type": "image/jpeg"}

if __name__ == "__main__":
    app.run(port=5000)
