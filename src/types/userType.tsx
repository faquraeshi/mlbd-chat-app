import { SiteType } from "./siteType";

export type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  site: SiteType;
};
