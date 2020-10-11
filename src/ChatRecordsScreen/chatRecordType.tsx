import { SiteType } from "types/siteType";
import { UserType } from "types/userType";

export type TestRecordType = {
  id: number;
  created_at: string;
  test: string;
  result: string;
  serial_no: string;
  route: string;
  site: SiteType;
  user: UserType;
};

