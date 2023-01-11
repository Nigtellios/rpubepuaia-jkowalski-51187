import client from "../../connection/apollo-client";
import heroSectionQuery from "../../components/standard/HeroSection/HeroSectionQuery";

const HeroSectionData = {
  fetchHeroData: async () => {
    try {
      const { data } = await client.query({
        query: heroSectionQuery,
      });

      return data.heroSection;
    } catch (error) {
      let errorMessage = '';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      throw new Error(errorMessage);
    }
  }
}

export default HeroSectionData;
