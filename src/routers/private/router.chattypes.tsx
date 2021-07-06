import ChatTypesScren from "ChatTypesScreen/ChatTypesScreen";
import { IMenuItemType } from "types/routerType";

/**
 * Chat Types Screen
 */
export const CHAT_TYPES_SCREEN: IMenuItemType = {
  id: "chattypes",
  path: "/chat-types",
  component: ChatTypesScren,
  title: "Chat Types",
};
