import client from "../../connection/apollo-client";
import { addProductQuery } from "./addProductQuery";

const addProductToUserCart = async (
  userId: number,
  cartData: any
) => {
  try {
    await client.mutate({
      mutation: addProductQuery,
      variables: {
        id: userId,
        cartData: cartData
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

export default addProductToUserCart;
