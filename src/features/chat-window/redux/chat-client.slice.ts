import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ChatClient } from "@mlbd/chat-client";

import { tokenProvider, pusherOptions } from "../helpers/chat.helpers";

let initialClient: any = null;

export const chatClient = createSlice({
  name: "chat/client",
  initialState: initialClient,
  reducers: {
    returnChatClient(state, payload) {
      return state;
    },
    initChat: (state) => {
      // if (initialClient) {
      //   return state;
      // }
      console.log("dddddddddddd", state);
      initialClient = new ChatClient({
        chatApiEndpoint: "http://localhost:3000/",
        tokenProvider,
        pusherOptions,
      });

      initialClient.connect().then(() => {
        console.log(initialClient);
      });
    },
  },
});

export const exClientChat = () => {
  console.log("dddddddddddd");
  initialClient = new ChatClient({
    chatApiEndpoint: "http://localhost:3000",
    tokenProvider,
    pusherOptions,
  });
  console.log(initialClient, tokenProvider);
  // initialClient.on;/

  initialClient.connect().then(() => {
    console.log(initialClient);
  });
};
