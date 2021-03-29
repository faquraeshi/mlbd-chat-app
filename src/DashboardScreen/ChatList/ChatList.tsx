import React from "react";
import "./ChatList.module.scss";
import avatar from "./person.png";
import { Chat } from "../ChatBoxScreen";

interface IProps {
  chats: Chat[];
}

const chatList = ({ chats }: IProps) => (
  <ul>
    {chats.map((chat: Chat) => {
      return (
        <div>
          <div className="row show-grid">
            <div className="col-xs-12">
              <div className="chatMessage">
                <div key={chat.id} className="box">
                  <p>
                    <strong>{chat.username}</strong>
                  </p>
                  <p>{chat.message}</p>
                </div>

                <div className="imageHolder">
                  <img
                    width={70}
                    height={100}
                    src={avatar}
                    className="img-responsive avatar"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </ul>
);

export default chatList;
