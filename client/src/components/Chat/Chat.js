// useEffect is a hook https://es.reactjs.org/docs/hooks-effect.html
import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from "socket.io-client";

import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        // Retrieve the data
        const {name, room} = queryString.parse(location.search);
        
        // Endpoint
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });
        
        // Disconnect effects
        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, [ENDPOINT, location.search]);

    return (
        <h1>Chat</h1>
    )
}

export default Chat;