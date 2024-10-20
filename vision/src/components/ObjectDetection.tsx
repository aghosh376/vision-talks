import React, { useEffect, useRef, useState } from 'react';

const ObjectDetection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isWebcamStarted, setIsWebcamStarted] = useState(false);

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
    }
  };

  return (
    <div className="object-detection">
      <div className="buttons">
        <button onClick={isWebcamStarted ? stopWebcam : startWebcam}>
          {isWebcamStarted ? 'Stop' : 'Start'} Webcam
        </button>
      </div>
      <div className="feed">
        {isWebcamStarted ? (
          <video ref={videoRef} autoPlay muted />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default ObjectDetection;
