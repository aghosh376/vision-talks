import * as handpose from '@tensorflow-models/handpose';
import '@tensorflow/tfjs-backend-webgl'
import * as handPoseDetect from '@tensorflow-models/hand-pose-detection';
import '@tensorflow/tfjs';
import React, { useEffect, useRef, useState } from 'react';
import "./ObjDetect.css";
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

const ObjectDetection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isWebcamStarted, setIsWebcamStarted] = useState(false);
  const [predictions, setPredictions] = useState<cocoSsd.DetectedObject[]>([]);
  const [detectionInterval, setDetectionInterval] = useState<NodeJS.Timeout | null>(null);

  const startWebcam = async () => {
    try {
      setIsWebcamStarted(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      setIsWebcamStarted(false);
      console.error('Error accessing webcam:', error);
    }
  };

  const stopWebcam = () => {
    const video = videoRef.current;

    if (video && video.srcObject instanceof MediaStream) {
      const stream = video.srcObject;
      const tracks = stream.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });

      video.srcObject = null;
      setIsWebcamStarted(false);
      setPredictions([]);
    }
  };

  const predictObject = async () => {
    try {
      const model = await cocoSsd.load();
      if (videoRef.current) {
        const predictions = await model.detect(videoRef.current);
        setPredictions(predictions);
      }
    } catch (err) {
      console.error('Error during object detection:', err);
    }
  };

  useEffect(() => {
    if (isWebcamStarted) {
      const interval = setInterval(() => predictObject(), 500);
      setDetectionInterval(interval);
    } else {
      if (detectionInterval) {
        clearInterval(detectionInterval);
        setDetectionInterval(null);
      }
    }

    // Cleanup the interval on component unmount or when webcam stops
    return () => {
      if (detectionInterval) {
        clearInterval(detectionInterval);
      }
    };
  }, [isWebcamStarted, detectionInterval]);

  return (
    <div className="object-detection">
      <div className="buttons">
        <button onClick={isWebcamStarted ? stopWebcam : startWebcam}>
          {isWebcamStarted ? "Stop" : "Start"} Webcam
        </button>
      </div>
      <div className="feed">
        {isWebcamStarted ? <video ref={videoRef} autoPlay muted /> : <div />}
        {/* Show labels and bounding boxes */}
        {predictions.length > 0 && predictions.map((prediction, index) => (
          <React.Fragment key={index}>
            <p
              style={{
                left: `${prediction.bbox[0]}px`,
                top: `${prediction.bbox[1]}px`,
                width: `${prediction.bbox[2] - 100}px`,
              }}
            >
              {`${prediction.class} - ${Math.round(prediction.score * 100)}% confidence.`}
            </p>
            <div
              className="marker"
              style={{
                left: `${prediction.bbox[0]}px`,
                top: `${prediction.bbox[1]}px`,
                width: `${prediction.bbox[2]}px`,
                height: `${prediction.bbox[3]}px`
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* List predictions */}
      {predictions.length > 0 && (
        <div>
          <h3>Predictions:</h3>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>
                {`${prediction.class} (${(prediction.score * 100).toFixed(2)}%)`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;