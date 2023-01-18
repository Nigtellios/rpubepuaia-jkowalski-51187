import { gql } from '@apollo/client';

const getAllProductSlugsQuery = gql`
    query ProductSlugs {
        products(pagination: {
            limit: 100
        }) {
            data {
                id
                attributes {
                    Slug
                }
            }
        }
    }
`;

export default getAllProductSlugsQuery;
