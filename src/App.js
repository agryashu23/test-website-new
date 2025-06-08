import React, { useState } from "react";
import "./App.css";
import Logo from "./assets/channels_logo.svg";
import ChipImage from "./assets/chips_home_image.svg";
import SendButton from "./assets/up_arrrow.svg";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setEmail(e.target.value);
  };

  const openChannels = () => {
    if (email.length < 10) {
      setError("Please enter a valid email address to proceed.");
      return;
    }
    setModalOpen(true);
    setTimeout(() => {
      if (window.openChannelsWidget) {
        window.openChannelsWidget({
          selectedChannel: "Footyl Club",
          email: email,
          selectedTopic: "General",
          theme: "dark",
          channels: [],
        });
      } else {
        console.warn("openChannelsWidget not ready");
      }
    }, 200);
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

          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-sidepanel" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://channels.social/embed/channels"
              title="Channels Embed"
              className="channels-frame"
            ></iframe>
          </div>
        </div>
      )}

      <div className="right-panel">
        <img src={ChipImage} alt="illustration" className="right-image" />
      </div>
    </div>
  );
}

export default App;
