import { graphql } from '@/typesGQL/gql';

// eslint-disable-next-line import/prefer-default-export
export const PRODUCTS = graphql(`
  query productHome($limit: Int, $where: ProductFilter) {
    productCollection(limit: $limit, where: $where) {
      items {
        productName
        slug
        image {
          url
        }
      }
    }
  }
`);
