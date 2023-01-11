import { gql } from '@apollo/client';

const HomepagePictureDescriptionCTA2Query = gql`
    query HomepagePresentationPhoto2 {
        homepagePresentationPhoto2 {
            data {
                id
                attributes {
                    PictureDescriptionCTA2 {
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

export default HomepagePictureDescriptionCTA2Query;
