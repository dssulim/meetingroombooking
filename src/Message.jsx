import React from "react";
import './Message.css';

function Message({userName}){
    return (
      <h5 className="message-hello">Hello! My name is {userName}!</h5>
    );
}

export default Message;