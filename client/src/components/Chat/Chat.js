// useEffect is a hook https://es.reactjs.org/docs/hooks-effect.html
import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";

import './Chat.css';

const Chat = ({ location }) => {

    useEffect(() => {
        // 1) Retrieve the data
        const {name, room} = queryString.parse(location.search);
        
        console.log(name, room);
    });

    return (
        <h1>Chat</h1>
    )
}

export default Chat;