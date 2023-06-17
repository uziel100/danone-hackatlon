import { graphql } from '@/typesGQL/gql';

// eslint-disable-next-line import/prefer-default-export
export const PRODUCTS = graphql(`
  query productCollection {
    productCollection {
      items {
        productName
        slug
        description {
          json
        }
        image {
          url
        }
      }
    }
  }
`);
