import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "http://localhost:3001/widget.js?apiKey=channelsbychips.site-6662f76162ac56e3fb0bcc5d-dc7cc137875e6f212e5196874431ec69";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (window.ChannelsWidget) {
        window.ChannelsWidget();
      }
    };
  }, []);

  const openChannels = () => {
    setModalOpen(true);
    setTimeout(() => {
      if (window.openChannelsWidget) {
        window.openChannelsWidget({
          selectedChannel: "Channel1",
          email: "yashu@chips.social",
        });
      } else {
        console.warn("openChannelsWidget not ready");
      }
    }, 200);
  };

  return (
    <div className="App">
      <h1>🔗 Channels Test Integration</h1>
      <button className="launch-button" onClick={openChannels}>
        Open Channels
      </button>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-sidepanel">
            <iframe
              src="http://localhost:3001/embed/channels"
              title="Channels Embed"
              className="channels-frame"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
