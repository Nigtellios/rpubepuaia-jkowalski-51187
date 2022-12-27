import { gql } from '@apollo/client';

const headerQuery = gql`
    query Header {
        header {
            data {
                id
                attributes {
                    Logotype {
                        data {
                            attributes {
                                url
                                alternativeText
                            }
                        }
                    }
                    PageName
                    Navigation {
                        id
                        Link {
                            id
                            LinkName
                            LinkURL
                        }
                        Button {
                            id
                            ButtonIcon {
                                data {
                                    attributes {
                                        url
                                        alternativeText
                                    }
                                }
                            }
                            ButtonText
                            ButtonStyle
                        }
                    }
                }
            }
        }
    }
`;

export default headerQuery;