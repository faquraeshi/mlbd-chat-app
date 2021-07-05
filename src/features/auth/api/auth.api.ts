import { apiAuth } from "../../../api/api";
import { AxiosResponse } from "axios";
import { AuthEndpointsEnum } from "../constants/auth.endpoints";
import { LoginCredentials } from "../types/auth.types";

// eslint-disable-next-line import/prefer-default-export
const loginApi = (data: LoginCredentials): Promise<AxiosResponse> =>
  apiAuth.post(`${AuthEndpointsEnum.LOGIN}`, data);

export default loginApi;
