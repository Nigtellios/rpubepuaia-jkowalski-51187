import client from "../../connection/apollo-client";
import getAllProductSlugsQuery from "./getAllProductSlugsQuery";
export async function getAllProductSlugs() {
  try {
    const { data } = await client.query({
      query: getAllProductSlugsQuery,
    });

    return data.products.data.map((product: any) => {
      return {
        params: {
          slug: product.attributes.Slug
        }
      }
    });
  } catch (error) {
    let errorMessage = '';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    throw new Error(errorMessage);
  }
}


export default getAllProductSlugs();
