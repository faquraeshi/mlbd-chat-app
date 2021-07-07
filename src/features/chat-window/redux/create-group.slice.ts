import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import createGroupChat from "../api/chat.api";
import { CreateGroupChat } from "../types/chat.types";

export const creatGroupSlice = createAsyncThunk(
  "create/group",
  (credentials: CreateGroupChat, { dispatch }) =>
    createGroupChat(credentials).then(
      (res) => {
        console.log(res);
        return null;
      },
      (err) => err.message
    )
);
