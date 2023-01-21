import { gql } from '@apollo/client';

const allProductsQuery = gql`
    query AllProductsData {
        products(pagination: {
            limit: 100
        }) {
            data {
                id
                attributes {
                    Name
                    Mode
                    Price
                    SalePrice
                    Slug
                    MainPhoto {
                        data {
                            id
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default allProductsQuery;
