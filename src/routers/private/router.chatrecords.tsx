import ChatRecordsScreen from "ChatRecordsScreen/ChatRecordsScreen";
import { IMenuItemType } from "types/routerType";
import { RouterParameters } from "constants/routerConst";

/**
 * Chat Records Screen
 */
export const CHAT_RECORDS_SCREEN: IMenuItemType = {
  id: "chatrecords",
  path: "/chat-records",
  component: ChatRecordsScreen,
  title: "Chat Records",
};

/**
 * Chat Record Details Screen (Modal)
 */
export const CHAT_RECORD_DETAILS_SCREEN: IMenuItemType = {
  ...CHAT_RECORDS_SCREEN,
  path: CHAT_RECORDS_SCREEN.path + "/" + RouterParameters.ID,
};
