import { gql } from '@apollo/client';

export const findUserQuery = gql`
    query getUserDataQuery($userEmail: StringFilterInput) {
        usersPermissionsUsers(filters: { email: $userEmail }) {
            data {
                id
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
