import { api } from "helpers/apiHelper";
import { Endpoints } from "constants/apiConst";

export const getAllChatRecords = () =>
  api.get(Endpoints.TEST_SAMPLES).then(response => response);
