import client from "../../connection/apollo-client";
import findUserQuery from "./findUserQuery";

const findUser = async (
  userEmail: string
) => {
  try {
    const { data } = await client.query({
      query: findUserQuery,
      variables: {
        userEmail: {
          containsi: userEmail
        }
      }
    });

    return data.usersPermissionsUsers.data[0];
  } catch (error) {
    let errorMessage = '';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    throw new Error(errorMessage);
  }
}

export default findUser;
