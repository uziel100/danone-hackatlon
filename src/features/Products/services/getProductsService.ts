import { ProductsResultsQuery, ProductsResultsQueryVariables } from '@/typesGQL/graphql';
import { ApolloClient } from '@apollo/client';
import { IGeneralOptionQuery } from '@/types/index';
import { PRODUCTS_RESULTS } from './queries.graphql';

const getProductsService = async (
  apolloClient: ApolloClient<object>,
  variables: ProductsResultsQueryVariables,
  options: IGeneralOptionQuery = {}
) => {
  const resp = await apolloClient.query<ProductsResultsQuery, ProductsResultsQueryVariables>({
    query: PRODUCTS_RESULTS,
    variables,
    ...options
  });
  return resp.data;
};

export default getProductsService;
