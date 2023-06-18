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
        slug
        sys {
          id
        }
        isEcoFarming
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
