import { Product } from '@/typesGQL/graphql';
import { ProductCard } from '../models/productModel';

// eslint-disable-next-line import/prefer-default-export
export const productCardAdapter = (data: Product): ProductCard => ({
  title: data.productName ?? '',
  slug: data.slug ?? '',
  description: data.description ?? '',
  image: data.image?.url ?? ''
});
