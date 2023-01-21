import client from "../../connection/apollo-client";
import allProductsQuery from "./AllProductsQuery";

const AllProducts = {
  fetchAllProducts: async () => {
    try {
      const { data } = await client.query({
        query: allProductsQuery,
      });

      return data.products;
    } catch (error) {
      let errorMessage = '';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      throw new Error(errorMessage);
    }
  }
}

export default AllProducts;
