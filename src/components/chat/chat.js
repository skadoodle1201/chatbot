import React from 'react';

import Info from '../info/info';
import Input from '../input/input';
import Messages from '../messages/messages';
import './chat.css';


const Chat = () =>{
        return(
          <div className="outerContainer">
          <div className="container">
              <Info />
              <Messages />
              <Input />
          </div>
          {/* <TextContainer /> */}
        </div>
        )
}

export default Chat;
