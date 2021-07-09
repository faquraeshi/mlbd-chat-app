export type ICreateGroupChat = {
  member_ids: string[] | null;
  token: string;
  meta?: {
    talk_room_type: string;
    name: string;
  };
};
