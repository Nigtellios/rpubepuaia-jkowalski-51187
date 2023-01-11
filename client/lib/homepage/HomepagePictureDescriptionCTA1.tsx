import client from "../../connection/apollo-client";
import HomepagePictureDescriptionCTA1Query from "./HomepagePictureDescriptionCTA1Query";

const HomepagePictureDescriptionCTA1 = {
  fetchHPDCTA1: async () => {
    try {
      const { data } = await client.query({
        query: HomepagePictureDescriptionCTA1Query,
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

export default HomepagePictureDescriptionCTA1;
