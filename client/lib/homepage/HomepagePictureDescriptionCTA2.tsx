import client from "../../connection/apollo-client";
import HomepagePictureDescriptionCTA2Query from "./HomepagePictureDescriptionCTA2Query";

const HomepagePictureDescriptionCTA2 = {
  fetchHPDCTA2: async () => {
    try {
      const { data } = await client.query({
        query: HomepagePictureDescriptionCTA2Query,
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

export default HomepagePictureDescriptionCTA2;
