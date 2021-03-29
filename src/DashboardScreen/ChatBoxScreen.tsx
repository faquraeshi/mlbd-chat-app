import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import ChatList from "./ChatList/ChatList";
import ChatBox from "./ChatBox/ChatBox";

export type Chat = {
  id?: number;
  username: string;
  text?: string;
  message: string;
};

const ChatBoxScreen = () => {
  const [username, setusername] = useState<string | null>("");
  const [chats, setchats] = useState<Chat[] | []>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const username = window.prompt("Username: ", "Anonymous");
    setusername(username);
    const pusher = new Pusher("91b3fe78f65fb4acdaca", {
      cluster: "ap1",
    });
    const channel = pusher.subscribe("chat");
    channel.bind("message", (data: Chat) => {
      const newChats: any = [...chats, data];
      setchats(newChats);
      setText("");
    });
  }, []);

  const handleTextChange = (e: any) => {
    if (e.keyCode === 13) {
      const payload = {
        username: username,
        message: text,
      };
      axios.post("http://localhost:5000/message", payload);
    } else {
      setText(e.target.value);
    }
  };

  return (
    <div className="App">
      <section>
        <ChatList chats={chats} />
        <ChatBox
          text={text}
          username={username ? username : ""}
          handleTextChange={handleTextChange}
        />
      </section>
    </div>
  );
};

export default memo(ChatBoxScreen);
