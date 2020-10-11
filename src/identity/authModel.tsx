import { createModel } from "@rematch/core";

const INITIAL_STATE = {
  isRefreshing: false,
  isLoggingOut: false,
  logoutCall: null,
};

const authModel = createModel({
  state: INITIAL_STATE,
  reducers: {
    /**
     * Set refresh state
     */
    setRefreshing: (state: Object, payload: { isRefreshing: boolean }) => {
      return {
        ...state,
        isRefreshing: payload.isRefreshing,
      };
    },
    /**
     * Set logging out state
     */
    setLoggingOut: (state: Object, payload: { isLoggingOut: boolean }) => {
      return {
        ...state,
        isLoggingOut: payload.isLoggingOut,
      };
    },
    /**
     * Set log out request
     */
    setLogoutCall: (state: Object, payload: { logoutCall: any }) => {
      return {
        ...state,
        logoutCall: payload,
      };
    },
    /**
     * Clear / reset state
     */
    clear() {
      return INITIAL_STATE;
    },
  },
});

export default authModel;
