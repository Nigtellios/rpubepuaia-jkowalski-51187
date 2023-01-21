import client from "../connection/apollo-client";
import headerQuery from "./HeaderQuery";

const HeaderData = {
  fetchHeaderData: async () => {
    try {
      const { data } = await client.query({
        query: headerQuery,
      });

      console.log(data.header)

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
