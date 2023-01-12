import client from "../../connection/apollo-client";
import HomePicDescCTA1Query from "./HomePicDescCTA1Query";

const HomePicDescCTA1 = {
  fetchHPDCTA1: async () => {
    try {
      const { data } = await client.query({
        query: HomePicDescCTA1Query,
      });

      return data.homepagePresentationPhoto1;
    } catch (error) {
      let errorMessage = '';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      throw new Error(errorMessage);
    }
  }
}

export default HomePicDescCTA1;
