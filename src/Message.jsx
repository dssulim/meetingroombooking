import React from "react";
import './Message.css';

function Message({userName}){
    return (
        <div className="message-hello">
            <p>Hi! My name is {userName}!</p>
            <p>Here you can choose a meeting room</p>
        </div>
    );
}

export default Message;