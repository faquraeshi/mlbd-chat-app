import { api } from "../../../../api/api";
import { AxiosResponse } from "axios";
import { ChatEndpointsEnum } from "../constants/group-chat.endpoints";
import { ICreateGroupChat } from "../types/groput-chat.types";

// eslint-disable-next-line import/prefer-default-export
const createGroupChat = (data: ICreateGroupChat): Promise<AxiosResponse> =>
  api.post(`${ChatEndpointsEnum.CREATE_GROUP}`, data);

export const getMyGroupList = (data: any): Promise<AxiosResponse> =>
  api.post(`${ChatEndpointsEnum.GET_MY_GROUP_LIST}`, data);

export default createGroupChat;
