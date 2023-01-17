import { gql } from '@apollo/client';

const bestsellerQuery = gql`
    query homepageBestseller {
        homepageBestseller {
            data {
                attributes {
                    products {
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
                                    DescriptionAlignment
                                }
                            }
                        }
                    }
                    Heading
                    Description
                }
            }
        }
    }
`;

export default bestsellerQuery;
