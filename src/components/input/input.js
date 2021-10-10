import React from 'react';

import './input.css';

const Input = () => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      /* value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} */
    />
    <button className="sendButton">Send</button>
  </form>
)
export default Input;