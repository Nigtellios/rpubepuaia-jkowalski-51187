/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "query Footer {\n  footer {\n    data {\n      attributes {\n        FooterBrand {\n          id\n          FooterLogotype {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          FooterCopyright\n        }\n        FooterNavLists {\n          ListName\n          FooterLink {\n            LinkName\n            LinkURL\n          }\n        }\n      }\n    }\n  }\n}": types.FooterDocument,
    "query Header {\n  header {\n    data {\n      id\n      attributes {\n        Logotype {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n        PageName\n        Navigation {\n          id\n          Link {\n            id\n            LinkName\n            LinkURL\n          }\n          Button {\n            id\n            ButtonIcon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n            ButtonText\n            ButtonStyle\n            ButtonLink\n          }\n          CartButton {\n            id\n            CartIcon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          MobileButton {\n            id\n            MobileButtonIcon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.HeaderDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Footer {\n  footer {\n    data {\n      attributes {\n        FooterBrand {\n          id\n          FooterLogotype {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          FooterCopyright\n        }\n        FooterNavLists {\n          ListName\n          FooterLink {\n            LinkName\n            LinkURL\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query Footer {\n  footer {\n    data {\n      attributes {\n        FooterBrand {\n          id\n          FooterLogotype {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          FooterCopyright\n        }\n        FooterNavLists {\n          ListName\n          FooterLink {\n            LinkName\n            LinkURL\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Header {\n  header {\n    data {\n      id\n      attributes {\n        Logotype {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n        PageName\n        Navigation {\n          id\n          Link {\n            id\n            LinkName\n            LinkURL\n          }\n          Button {\n            id\n            ButtonIcon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n            ButtonText\n            ButtonStyle\n            ButtonLink\n          }\n          CartButton {\n            id\n            CartIcon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          MobileButton {\n            id\n            MobileButtonIcon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query Header {\n  header {\n    data {\n      id\n      attributes {\n        Logotype {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n        PageName\n        Navigation {\n          id\n          Link {\n            id\n            LinkName\n            LinkURL\n          }\n          Button {\n            id\n            ButtonIcon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n            ButtonText\n            ButtonStyle\n            ButtonLink\n          }\n          CartButton {\n            id\n            CartIcon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n          MobileButton {\n            id\n            MobileButtonIcon {\n              data {\n                attributes {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;