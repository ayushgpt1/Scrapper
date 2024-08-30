import React, { useState } from "react";
import MonitoringAlerts from "../components/MonitoringAlerts";
import Webcam from "react-webcam";
import SendEmergencyMessage from "../components/SendEmergencyMessage"; // Import the SendEmergencyMessage component

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const Detection = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);

  const toggleCamera = () => {
    setIsCameraOn((prevState) => !prevState);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Detection</h1>

      <button onClick={toggleCamera} style={styles.button}>
        {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
      </button>

      {isCameraOn && (
        <div style={styles.cameraContainer}>
          <Webcam
            audio={false}
            height={480}
            width={640}
            videoConstraints={videoConstraints}
            style={styles.webcam}
          />
        </div>
      )}

      <SendEmergencyMessage /> {/* Add the SendEmergencyMessage button here */}

      <MonitoringAlerts />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    margin: "0 auto",
  },
  header: {
    color: "#333",
    marginBottom: "20px",
    fontSize: "24px",
  },
  cameraContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  webcam: {
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
  },
  button: {
    backgroundColor: "#333",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginBottom: "20px",
  },
  buttonHover: {
    backgroundColor: "#555",
  },
};

export default Detection;
