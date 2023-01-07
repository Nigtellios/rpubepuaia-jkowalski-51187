import { gql } from '@apollo/client';

const footerQuery = gql`
    query Footer {
        footer {
            data {
                attributes {
                    FooterBrand {
                        id
                        FooterLogotype {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                    FooterNavLists {
                        FooterLink {
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
