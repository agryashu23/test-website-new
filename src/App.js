import React, { useState } from "react";
import "./App.css";
import Logo from "./assets/channels_logo.svg";
import ChipImage from "./assets/chips_home_image.svg";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setEmail(e.target.value);
  };

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "http://localhost:3001/widget.js?apiKey=channelsbychips.site-6662f76162ac56e3fb0bcc5d-0e6052a455853e3e9027d62d95afa991";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   script.onload = () => {
  //     if (window.ChannelsWidget) {
  //       window.ChannelsWidget();
  //     }
  //   };
  // }, []);

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
            All your data has been securely transferred to Channels, which will
            provide you a better experience.
          </p>
          <div className="email-text">Enter email to login into embed</div>

          <div className="cta-buttons">
            <div className="emailField">
              <input
                type="email"
                className="input-field"
                placeholder="email address"
                value={email}
                onChange={handleChange}
              />
            </div>
            <button
              className={`${
                email.length >= 10 ? "primary-btn" : "secondary-btn"
              }`}
              onClick={openChannels}
            >
              Checkout embed demo
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-sidepanel" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="http://localhost:3001/embed/channels"
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
