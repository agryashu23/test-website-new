import React, { useState, useEffect } from "react";
import ChannelsModal from "./components/ChannelsModal";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://channels.social/widget.js?apiKey=YOUR_API_KEY";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openChannels = () => {
    setModalOpen(true);
    if (window.openChannelsWidget) {
      window.openChannelsWidget({
        selectedChannel: "general",
        email: "test@example.com",
      });
    }
  };

  return (
    <div className="App">
      <h1>🔗 Channels Test Integration</h1>
      <button className="launch-button" onClick={openChannels}>
        Open Channels
      </button>
      <p className="launch-button">New</p>

      {modalOpen && <ChannelsModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default App;
