import React, { useState } from "react";
import "./App.css";
import Logo from "./assets/channels_logo.svg";
import logoPath from "./assets/logo.svg";
import ChipImage from "./assets/chips_home_image.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

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
    setModalOpen(true);
    setTimeout(() => {
      if (window.openChannelsWidget) {
        window.openChannelsWidget({
          selectedChannel: "channel2",
          email: "yashu.agrawal2312@gmail.com",
          selectedTopic: "topic4",
          channels: ["channel1", "channel2"],
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
          <div className="cta-buttons">
            <button
              className="primary-btn"
              onClick={() => (window.location.href = "https://channels.social")}
            >
              Check out Channels.social
            </button>
            <a
              href="https://calendly.com/channels_social/talk-to-us"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              Contact us
            </a>
            <button className="launch-button" onClick={openChannels}>
              Open Channels
            </button>
          </div>
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
