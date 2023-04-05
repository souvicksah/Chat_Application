import React, { useEffect, useState } from "react";
import querystring from "query-string";
import io from "socket.io-client";
import "../CSS/Chat.css";
import { useLocation } from "react-router";


let socket;

const Chat = () => {
  let location = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT='localhost:5000';


  useEffect(() => {
    const data = querystring.parse(location.search);
    socket=io(ENDPOINT);

    setName(data.name);
    setRoom(data.room);
    console.log(socket);
  });

  return <div>Chat</div>;
};

export default Chat;
