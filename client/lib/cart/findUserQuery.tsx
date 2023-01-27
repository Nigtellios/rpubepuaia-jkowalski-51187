import { gql } from '@apollo/client';

export const findUserQuery = gql`
    query getProductDataQuery($userEmail: StringFilterInput) {
        usersPermissionsUsers(filters: { email: $userEmail }) {
            data {
                attributes {
                    email
                    username
                    cart
                }
            }
        }
    }
`;

export default findUserQuery;
