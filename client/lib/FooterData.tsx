import client from "../connection/apollo-client";
import footerQuery from "../components/standard/Footer/FooterQuery";

const FooterData = {
  fetchFooterData: async () => {
    try {
      const { data } = await client.query({
        query: footerQuery,
      });

      return data.footer;
    } catch (error) {
      let errorMessage = '';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      throw new Error(errorMessage);
    }
  }
}

export default FooterData;
