import { ProductCollectionQuery, ProductCollectionQueryVariables } from '@/typesGQL/graphql';
import { ApolloClient } from '@apollo/client';
import { IGeneralOptionQuery } from '@/types/index';
import { PRODUCTS } from './queries.graphql';

const getProductsService = async (
  apolloClient: ApolloClient<object>,
  variables: ProductCollectionQueryVariables,
  options: IGeneralOptionQuery = {}
) => {
  const resp = await apolloClient.query<ProductCollectionQuery, ProductCollectionQueryVariables>({
    query: PRODUCTS,
    variables,
    ...options
  });
  return resp.data.productCollection;
};

export default getProductsService;
