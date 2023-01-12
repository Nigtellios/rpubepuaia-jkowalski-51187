import { gql } from '@apollo/client';

const HomePicDescCTA1Query = gql`
    query HomepagePresentationPhoto1 {
        homepagePresentationPhoto1 {
            data {
                id
                attributes {
                    PictureDescriptionCTA {
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
    }
`;

export default HomePicDescCTA1Query;
