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
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query productHome($limit: Int, $where: ProductFilter) {\n    productCollection(limit: $limit, where: $where) {\n      items {\n        productName\n        slug\n        image {\n          url\n        }\n      }\n    }\n  }\n": types.ProductHomeDocument,
    "\n  query productsResults($skip: Int, $limit: Int, $where: ProductFilter, $order: [ProductOrder]) {\n    productCollection(skip: $skip, limit: $limit, where: $where, order: $order) {\n      total\n      skip\n      limit\n      items {\n        productName\n        energeticValue\n        slug\n        sys {\n          id\n        }\n        isEcoFarming\n        description {\n          json\n        }\n        image {\n          url\n          title\n        }\n      }\n    }\n  }\n": types.ProductsResultsDocument,
    "\n  query getProduct($limit: Int, $where: ProductFilter) {\n    productCollection(limit: $limit, where: $where) {\n      items {\n        availableIn\n        carbohydrates\n        description {\n          json\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n        fats\n        image {\n          url\n          fileName\n        }\n        isEcoFarming\n        productName\n        slug\n      }\n    }\n  }\n": types.GetProductDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query productHome($limit: Int, $where: ProductFilter) {\n    productCollection(limit: $limit, where: $where) {\n      items {\n        productName\n        slug\n        image {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query productHome($limit: Int, $where: ProductFilter) {\n    productCollection(limit: $limit, where: $where) {\n      items {\n        productName\n        slug\n        image {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query productsResults($skip: Int, $limit: Int, $where: ProductFilter, $order: [ProductOrder]) {\n    productCollection(skip: $skip, limit: $limit, where: $where, order: $order) {\n      total\n      skip\n      limit\n      items {\n        productName\n        energeticValue\n        slug\n        sys {\n          id\n        }\n        isEcoFarming\n        description {\n          json\n        }\n        image {\n          url\n          title\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query productsResults($skip: Int, $limit: Int, $where: ProductFilter, $order: [ProductOrder]) {\n    productCollection(skip: $skip, limit: $limit, where: $where, order: $order) {\n      total\n      skip\n      limit\n      items {\n        productName\n        energeticValue\n        slug\n        sys {\n          id\n        }\n        isEcoFarming\n        description {\n          json\n        }\n        image {\n          url\n          title\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProduct($limit: Int, $where: ProductFilter) {\n    productCollection(limit: $limit, where: $where) {\n      items {\n        availableIn\n        carbohydrates\n        description {\n          json\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n        fats\n        image {\n          url\n          fileName\n        }\n        isEcoFarming\n        productName\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProduct($limit: Int, $where: ProductFilter) {\n    productCollection(limit: $limit, where: $where) {\n      items {\n        availableIn\n        carbohydrates\n        description {\n          json\n        }\n        contentfulMetadata {\n          tags {\n            id\n            name\n          }\n        }\n        fats\n        image {\n          url\n          fileName\n        }\n        isEcoFarming\n        productName\n        slug\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;