import { gql } from '@apollo/client';

const globalSettingsQuery = gql`
    query GlobalSettings {
        globalSetting {
            data {
                id
                attributes {
                    ArrowDown {
                        data {
                            id
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    ArrowUp {
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

export default globalSettingsQuery;
