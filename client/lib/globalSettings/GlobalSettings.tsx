import client from "../../connection/apollo-client";
import globalSettingsQuery from "./GlobalSettingsQuery";

const GlobalSettings = {
  fetchGlobalData: async () => {
    try {
      const { data } = await client.query({
        query: globalSettingsQuery,
      });

      return data.globalSetting.data.attributes;
    } catch (error) {
      let errorMessage = '';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      throw new Error(errorMessage);
    }
  }
}

export default GlobalSettings;
