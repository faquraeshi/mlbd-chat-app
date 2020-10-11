import packageJson from "../../package.json";

/** Version parameter for enpoint URL */
const VERSION_URL = "1";
const ODATA_URL = `api/${VERSION_URL}/OData`;

/** Private endpoint URLs */
const TEST_SAMPLES_URL = ODATA_URL + "/TestSamples";
const TEST_TYPE_URL = ODATA_URL + "/TestTypes";

/** API Endpoints */

export const Endpoints = Object.freeze({
  TEST_SAMPLES: TEST_SAMPLES_URL,
  TEST_TYPE: TEST_TYPE_URL
});

const env: any = process.env;

/** Environment parameters */
export const Env = Object.freeze({
  VERSION: packageJson.version,
  API_HOST: env.REACT_APP_API_HOST
});

/** HTTP Client Errors */
export enum ClientErrors {
  FORBIDDEN = 403,
  NOT_FOUND = 404
}
