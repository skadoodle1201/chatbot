import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './message/message';

import './messages.css';

const Messages = () => (
  <ScrollToBottom className="messages">
     <Message />
  </ScrollToBottom>
);

export default Messages;