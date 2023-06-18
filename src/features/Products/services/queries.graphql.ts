/* eslint-disable import/prefer-default-export */

import { graphql } from '@/typesGQL/gql';

export const PRODUCTS_RESULTS = graphql(`
  query productsResults($skip: Int, $limit: Int, $where: ProductFilter, $order: [ProductOrder]) {
    productCollection(skip: $skip, limit: $limit, where: $where, order: $order) {
      total
      skip
      limit
      items {
        productName
        energeticValue
        isEcoFarming
        slug
        sys {
          id
        }
        description {
          json
        }
        image {
          url
          title
        }
      }
    }
  }
`);

export const GET_PRODUCT = graphql(`
  query getProduct($limit: Int, $where: ProductFilter) {
    productCollection(limit: $limit, where: $where) {
      items {
        availableIn
        carbohydrates
        energeticValue
        isEcoFarming
        description {
          json
        }
        contentfulMetadata {
          tags {
            id
            name
          }
        }
        fats
        image {
          url
          fileName
        }
        productName
        slug
      }
    }
  }
`);
