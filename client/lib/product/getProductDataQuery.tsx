import { gql } from '@apollo/client';

export const getProductDataQuery = gql`
    query getProductDataQuery($slug: StringFilterInput) {
        products(filters: { Slug: $slug }) {
            data {
                id
                attributes {
                    Name
                    Description
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
                    Gallery {
                        data {
                            id
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    AdditionalInfo
                    categories {
                        data {
                            id
                            attributes {
                                Name
                            }
                        }
                    }
                    Marketing {
                        id
                        DescriptionHeading
                        DescriptionText
                        Variant
                        Picture {
                            data {
                                id
                                attributes {
                                    url
                                    width
                                    height
                                }
                            }
                        }
                        CTA {
                            id
                            ButtonIcon {
                                data {
                                    id
                                    attributes {
                                        url
                                        width
                                        height
                                    }
                                }
                            }
                            ButtonText
                            ButtonStyle
                            ButtonLink
                        }
                    }
                }
            }
        }
    }
`;

export default getProductDataQuery;
