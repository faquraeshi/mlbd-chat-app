import { api } from "../../../api/api";
import { AxiosResponse } from "axios";
import { ChatEndpointsEnum } from "../constants/chat.endpoints";
import { CreateGroupChat } from "../types/chat.types";

// eslint-disable-next-line import/prefer-default-export
const createGroupChat = (data: CreateGroupChat): Promise<AxiosResponse> =>
  api.post(`${ChatEndpointsEnum.CREATE_GROUP}`, data);

export default createGroupChat;
