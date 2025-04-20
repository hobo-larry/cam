//const cv = require("opencv4nodejs");
import cv from opencv4nodejs

// Open the default camera (usually 0)
const webcam = new cv.VideoCapture(0);

// Capture a frame
const frame = webcam.read();

// Display the frame (if you want to use it with OpenCV's window functionality)
cv.imshow("Frame", frame);
cv.waitKey();

// Alternatively, you can log the frame data to the console
console.log(frame);
