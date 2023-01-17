import client from "../../connection/apollo-client";
import bestsellerQuery from "../../components/standard/Bestseller/BestsellerQuery";

const BestsellerData = {
  fetchBestsellerData: async () => {
    try {
      const { data } = await client.query({
        query: bestsellerQuery,
      });

      return data.homepageBestseller;
    } catch (error) {
      let errorMessage = '';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      throw new Error(errorMessage);
    }
  }
}

export default BestsellerData;
