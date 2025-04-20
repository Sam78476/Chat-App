import React from "react";
import "./css/MessageInput.css";

function MessageInput() {
  return (
    <form className="message-input">
        <input type="text" placeholder="Message ..." />
        <button type="submit">Send</button>
    </form>
  );
}

export default MessageInput;