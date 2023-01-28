import client from "../../connection/apollo-client";
import getProductDataQuery from "./getProductDataQuery";

export async function getProductData(slug: any) {
  try {
    const { data } = await client.query({
      query: getProductDataQuery,
      variables: {
        slug: {
          containsi: slug
        }
      }
    });

    return data.products.data[0];
  } catch (error) {
    let errorMessage = '';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    throw new Error(errorMessage);
  }
}
