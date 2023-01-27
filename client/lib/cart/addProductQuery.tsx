import { gql } from '@apollo/client';

export const addProductQuery = gql`
    mutation addProductToUserCart($id: ID!, $cartData: JSON) {
        updateUsersPermissionsUser(id: $id, data: { cart: $cartData }) {
            data {
                attributes {
                    cart
                }
            }
        }
    }
`;
