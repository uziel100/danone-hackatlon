import { ProductFilter, Product as ProductRoot } from '@/typesGQL/graphql';
import { Product, ProductDetail, ProductFilters } from '../models/productModel';

export const productAdapter = (data: ProductRoot): Product => ({
  title: data.productName ?? '',
  slug: data.slug ?? '',
  description: `Description: ${data.productName}`,
  image: data.image?.url ?? ''
});

export const productDetailAdapter = (data: ProductRoot): ProductDetail => ({
  title: data.productName ?? '',
  slug: data.slug ?? '',
  description: `Description: ${data.productName}`,
  descriptionRichText: data.description?.json,
  image: data.image?.url ?? '',
  availableIn: data.availableIn ?? 0,
  carbohydrates: data.carbohydrates ?? 0,
  energeticValue: data.energeticValue ?? 0,
  fats: data.fats ?? 0
});

export const productFiltersAdapter = (filters: ProductFilters): ProductFilter => {
  const { query, isEcoFarming } = filters;

  return {
    productName_contains: query?.length ? query : undefined,
    isEcoFarming
  };
};
