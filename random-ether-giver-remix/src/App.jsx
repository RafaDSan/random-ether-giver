import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hello Guys!
        </div>

        <div className="bio">
        I am learning blockchain to work as a devoloper on web3. Send a wave and help me out!
        </div>

        <button className="waveButton" onClick={null}>
          Send a wave
        </button>
      </div>
    </div>
  );
}