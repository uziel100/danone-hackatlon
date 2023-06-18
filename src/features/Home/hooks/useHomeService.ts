import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';
import { getErrorMessage } from '@/utils/index';
import { IGeneralOptionQuery } from '@/types/apollo';
import { ProductHomeQueryVariables } from '@/typesGQL/graphql';
import getProductsService from '../services/getProductsService';
import { productCardAdapter } from '../adapters/productAdapter';
import { ProductCard } from '../models/productModel';

const useHomeService = () => {
  const apolloClient = useApolloClient();

  const getProducts = useCallback(
    async (variables: ProductHomeQueryVariables, options: IGeneralOptionQuery): Promise<ProductCard[]> => {
      try {
        const response = await getProductsService(apolloClient, variables, options);
        if (response?.items === undefined) return [];
        const products = response?.items.map(productCardAdapter);
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

export default useHomeService;
