import React, { useEffect, useState } from "react";
import ScrollToBottom from 'react-scroll-to-bottom'
function Chat({ socket, username, room }) {
  const [curmessage, setCur] = useState("");
  const [messagelist, setMsgList] = useState([]);
  const [count,setCount]=useState(0);
  const sendmsg = async () => {
    if (curmessage !== "") {
      const messagedata = {
        room: room,
        author: username,
        message: curmessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messagedata);
      setMsgList((list) => [...list, messagedata]);
      setCur("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      //console.log(data);
      setCount(count+1);
      setMsgList((list) => [...list, data]);
    });
  }, [socket]);
  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
        {messagelist.map((content) => {
          return (
            <div className="message"
            id={username===content.author?"you":"other"}>
              <div className="message-content">
                <p>{content.message}</p>
                {/* <p>{count}</p> */}
              </div>
              <div className="message-meta">
                <p id="time">{content.time}</p>
                <p id="author">{content.author}</p>
              </div>
            </div>
          );
        })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={curmessage}
          placeholder="enter something"
          onChange={(event) => {
            setCur(event.target.value);
          }}
        ></input>
        <button onClick={sendmsg}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
