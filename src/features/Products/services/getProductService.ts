import { GetProductQuery, GetProductQueryVariables } from '@/typesGQL/graphql';
import { ApolloClient } from '@apollo/client';
import { IGeneralOptionQuery } from '@/types/index';
import { GET_PRODUCT } from './queries.graphql';

const getProductService = async (
  apolloClient: ApolloClient<object>,
  variables: GetProductQueryVariables,
  options: IGeneralOptionQuery = {}
) => {
  const resp = await apolloClient.query<GetProductQuery, GetProductQueryVariables>({
    query: GET_PRODUCT,
    variables,
    ...options
  });
  return resp.data.productCollection;
};

export default getProductService;
