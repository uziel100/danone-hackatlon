import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';
import { IGeneralOptionQuery } from '@/types/apollo';
import { getErrorMessage } from '@/utils/index';
import { ProductsResultsQueryVariables } from '@/typesGQL/graphql';
import { getProductsService } from '../services';
import { Product } from '../models/productModel';
import { productAdapter } from '../adapters/productAdapter';

const useProductsService = () => {
  const apolloClient = useApolloClient();

  const getProducts = useCallback(
    async (variables: ProductsResultsQueryVariables, options: IGeneralOptionQuery): Promise<Product[]> => {
      try {
        const response = await getProductsService(apolloClient, variables, options);
        if (response?.items === undefined) return [];
        const products = response?.items.map(productAdapter);
        return products ?? [];
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
