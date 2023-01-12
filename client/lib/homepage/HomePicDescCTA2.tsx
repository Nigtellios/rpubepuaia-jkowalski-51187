import client from "../../connection/apollo-client";
import HomePicDescCTA2Query from "./HomePicDescCTA2Query";

const HomePicDescCTA2 = {
  fetchHPDCTA2: async () => {
    try {
      const { data } = await client.query({
        query: HomePicDescCTA2Query,
      });

      return data.homepagePresentationPhoto2;
    } catch (error) {
      let errorMessage = '';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      throw new Error(errorMessage);
    }
  }
}

export default HomePicDescCTA2;
