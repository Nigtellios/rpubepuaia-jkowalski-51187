import client from "../connection/apollo-client";
import headerQuery from "../components/Header/HeaderQuery";

const HeaderData = {
  fetchHeaderData: async () => {
    try {
      const { data } = await client.query({
        query: headerQuery,
      });

      return data.header;
    } catch (error) {
      let errorMessage = '';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      throw new Error(errorMessage);
    }
  }
}

export default HeaderData;
