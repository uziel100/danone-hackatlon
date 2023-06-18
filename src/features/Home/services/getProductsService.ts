import { ProductHomeQuery, ProductHomeQueryVariables } from '@/typesGQL/graphql';
import { ApolloClient } from '@apollo/client';
import { IGeneralOptionQuery } from '@/types/index';
import { PRODUCTS } from './queries.graphql';

const getProductsService = async (
  apolloClient: ApolloClient<object>,
  variables: ProductHomeQueryVariables,
  options: IGeneralOptionQuery = {}
) => {
  const resp = await apolloClient.query<ProductHomeQuery, ProductHomeQueryVariables>({
    query: PRODUCTS,
    variables,
    ...options
  });
  return resp.data.productCollection;
};

export default getProductsService;
