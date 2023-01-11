import { gql } from '@apollo/client';

const heroSectionQuery = gql`
    query HeroSection {
        heroSection {
            data {
                id
                attributes {
                    Slider {
                        SingleSlide {
                            id
                            SlideHeading
                            SlideSubheading
                            SlideImage {
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
                        ArrowUpIcon {
                            data {
                                id
                                attributes {
                                    url
                                    width
                                    height
                                }
                            }
                        }
                        ArrowDownIcon {
                            data {
                                id
                                attributes {
                                    url
                                    width
                                    height
                                }
                            }
                        }
                        ReusableButton {
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

export default heroSectionQuery;
