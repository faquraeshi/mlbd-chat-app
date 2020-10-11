import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en-US",
  lng: "en-US",
  debug: false,
  interpolation: {
    escapeValue: false
  },
  /**
   * Add initial translation keys/values below to show here
   * while the rest of the translation
   * is downloaded
   */
  resources: {
    "en-US": {
      translation: {
        clientErrors: {
          forbiddenTitle: "403",
          forbidden: "You do not have permission to view this content.",
          notFoundTitle: "404",
          notFound: "The content you were looking for was not found."
        },
        chatRecords: {
          selectCustomer: "Select Customer",
          selectSite: "Select Site",
          dateTime: "Date / Time",
          test: "Test",
          testResult: "Test Result",
          readerNo: "Reader Serial No.",
          route: "Route",
          site: "Site",
          user: "User",
          details: "Details",
          closeDetails: "Close",
          location: "Location"
        }
      }
    }
  }
});

export default i18next;
