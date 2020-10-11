import axios from "axios";
import { Env } from "../constants/apiConst";

export const api = axios.create({
  baseURL: Env.API_HOST,
  headers: { "Content-Type": "application/json" }
});
