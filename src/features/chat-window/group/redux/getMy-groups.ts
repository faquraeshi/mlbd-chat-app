import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getMyGroupList } from "../api/group-chat.api";
import { ICreateGroupChat } from "../types/groput-chat.types";
import cookie from "react-cookies";
import { AUTH_ACCESS_TOKEN } from "../../../auth/constants/auth.keys";

// export const getMyGroup = createAsyncThunk(
//   "get/group",
//   (data, { dispatch }) => {
//     getMyGroupList(data).then(
//       (res) => {
//         console.log(res.data);
//         return res;
//       },
//       (err) => err.message
//     );
//   }
// );

export const getMyGroup = createAsyncThunk(
  "get/user",
  async (data: any) => {
    const res = await getMyGroupList(data);
    console.log(res);
    return res.data;
  }
  // (err) => err.message
);
