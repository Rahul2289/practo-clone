import React from "react";
import img from "../images/consult-chat-banner.png";
import { Button } from "@mui/material";
const AnsFromDoctor = () => {
  return (
    <div>
      <img src={img} alt="consult-chat-banner" />
      <h6>Get answers to your health problem</h6>
      <p>Chat with a specialist now and clear all your health concerns</p>
      <div>
        <p>5 min response</p>
      </div>
      <div>
        <p>Free Audio Calls</p>
      </div>
      <div>
        <p>Free Followup</p>
      </div>
      <Button>Chat with doctor</Button>
    </div>
  );
};

export default AnsFromDoctor;
