import { getSingleGroupApi } from "../api/group-chat.api";
import { ICreateGroupChat } from "../types/groput-chat.types";
import cookie from "react-cookies";
import { AUTH_ACCESS_TOKEN } from "../../../auth/constants/auth.keys";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSingleGroup = createAsyncThunk(
  "get/group",
  async (data: any) => {
    const res = await getSingleGroupApi(data);
    console.log(res);
    return res.data;
  }
  // (err) => err.message
);
