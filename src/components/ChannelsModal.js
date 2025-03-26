import React from "react";

const ChannelsModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-sidepanel">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <iframe
          src="/embed/channels"
          title="Channels Embed"
          className="channels-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default ChannelsModal;
