import React from 'react';

import './message.css';


const Message = () => {
  
  let bot = 'Hi what are you intresed in ?';
  let user = ' React';

  return (
    <div className='messageUpper'>
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{bot}</p>
        </div>
      </div>
      <div className="messageContainer justifyEnd">
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{user}</p>
        </div>
      </div>  
    </div>
  );
}

export default Message;