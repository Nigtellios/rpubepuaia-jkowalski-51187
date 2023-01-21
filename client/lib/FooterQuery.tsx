import { gql } from '@apollo/client';

const footerQuery = gql`
    query Footer {
        footer {
            data {
                id
                attributes {
                    FooterBrand {
                        id
                        FooterLogotype {
                            data {
                                id
                                attributes {
                                    url
                                }
                            }
                        }
                        FooterCopyright
                    }
                    FooterNavLists {
                        id
                        ListName
                        FooterLink {
                            id
                            LinkName
                            LinkURL
                        }
                    }
                }
            }
        }
    }
`;

export default footerQuery;
