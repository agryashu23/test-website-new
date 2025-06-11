import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./assets/channels_logo.svg";
import ChipImage from "./assets/chips_home_image.svg";
import SendButton from "./assets/up_arrrow.svg";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("right");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setEmail(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const checkEmail = () => {
    if (email.length < 10) {
      setError("Please enter a valid email address to proceed.");
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address to proceed.");
      return false;
    }
    return true;
  };

  const openChannels = () => {
    if (email.length < 10 || !checkEmail(email)) {
      setError("Please enter a valid email address to proceed.");
      return;
    }

    window.openChannelsWidget({
      email,
      selectedChannel: "Footyl Club",
      selectedTopic: "General",
      theme: "dark",
      autoLogin: true,
      width: {
        default: "450px",
        md: "400px",
        sm: "100%",
      },
      height: {
        default: "95%",
        md: "85%",
        sm: "80%",
      },
      position: position,
    });
  };

  return (
    <div className="og-container">
      <div className="left-panel">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="content-box">
          <h2>Chips.social</h2>
          <h3>is now Channels.social</h3>
          <p className="description">
            We’ve moved and brought everything with us. Your data is safe, and
            the experience is now better, faster, and built for more.
          </p>
          <p className="description">
            To explore the new Channels embed, just enter your email below. It’s
            quick and you’ll be dropped right into a live preview.
          </p>

          <div className="cta-email-wrapper">
            <input
              type="email"
              className="styled-email-input"
              placeholder="Enter email address"
              value={email}
              onChange={handleChange}
            />
            <button
              className="send-arrow-btn"
              onClick={openChannels}
              disabled={email.length < 10}
            >
              <img src={SendButton} alt="arrow-btn" />
            </button>
          </div>
          <div className="position-row">
            <label className="position-label">Position</label>
            <input
              id="position-input"
              type="text"
              className="styled-position-input"
              placeholder="e.g. right, left, bottom"
              value={position}
              onChange={handlePositionChange}
            />
          </div>

          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
      {/* {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-sidepanel" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://channels.social/embed/channels"
              title="Channels Embed"
              className="channels-frame"
            ></iframe>
          </div>
        </div>
      )} */}

      <div className="right-panel">
        <img src={ChipImage} alt="illustration" className="right-image" />
      </div>
    </div>
  );
}

export default App;
