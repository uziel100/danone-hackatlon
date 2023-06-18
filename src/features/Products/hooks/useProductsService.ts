import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';
import { IGeneralOptionQuery } from '@/types/apollo';
import { getErrorMessage } from '@/utils/index';
import { ProductsResultsQueryVariables } from '@/typesGQL/graphql';
import { getProductsService } from '../services';
import { ProductList } from '../models/productModel';
import { productListAdapter } from '../adapters/productAdapter';

const useProductsService = () => {
  const apolloClient = useApolloClient();

  const getProducts = useCallback(
    async (variables: ProductsResultsQueryVariables, options: IGeneralOptionQuery): Promise<ProductList> => {
      try {
        const response = await getProductsService(apolloClient, variables, options);
        const formattedListProducts = productListAdapter(response);
        return formattedListProducts;
      } catch (error) {
        throw new Error(getErrorMessage(error));
      }
    },
    [apolloClient]
  );

  return {
    getProducts
  };
};

export default useProductsService;
