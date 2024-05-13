import React from "react";

const MessageBox = () => {
  return (
    <div className="">
      <div className="chat-header text-black">
        Obi-Wan Kenobi
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className="chat-bubble">You were the Chosen One!</div>
      {/* <div className="chat-footer opacity-50 text-black">Delivered</div> */}

      <div className="chat chat-end">
        <div className="chat-header text-black">
          You
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
      </div>
    </div>
  );
};

export default MessageBox;
