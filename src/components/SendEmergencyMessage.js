import React from "react";
import axios from "axios";

const SendEmergencyMessage = () => {
  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/send-emergency-message');
      if (response.status === 200 && response.data.success) {
        // Remove or comment out the alert
        // alert('Emergency message sent!');
        console.log('Emergency message sent successfully:', response.data.message_sid);
      } else {
        console.error('Error response from server:', response.data.error);
        alert('Failed to send emergency message.');
      }
    } catch (error) {
      console.error('Error sending emergency message:', error);
      alert('Failed to send emergency message.');
    }
  };

  return (
    <button onClick={handleClick}>Send Emergency Message</button>
  );
};

export default SendEmergencyMessage;
