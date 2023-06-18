import { ProductFilter, Product as ProductRoot } from '@/typesGQL/graphql';
import { Product, ProductFilters } from '../models/productModel';

// eslint-disable-next-line import/prefer-default-export
export const productAdapter = (data: ProductRoot): Product => ({
  title: data.productName ?? '',
  slug: data.slug ?? '',
  description: data.description ?? '',
  image: data.image?.url ?? ''
});

export const productFiltersAdapter = (filters: ProductFilters): ProductFilter => {
  const { query, isEcoFarming } = filters;

  return {
    productName_contains: query?.length ? query : undefined,
    isEcoFarming
  };
};
