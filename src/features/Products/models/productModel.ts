import { ProductDescription } from '@/typesGQL/graphql';

export interface Product {
  title: string;
  slug: string;
  image: string;
  energeticValue: number;
  isEcoFarming: boolean;
}

export interface ProductList {
  totalCount: number;
  items: Product[];
}

export interface ProductFilters {
  query?: string;
  isEcoFarming?: boolean;
  energeticValue?: number;
}

export interface ProductPagination {
  skip?: number;
  limit?: number;
  order?: string;
}

export interface ProductDetail extends Product {
  descriptionRichText: ProductDescription;
  availableIn: number;
  fats: number;
  carbohydrates: number;
  energeticValue: number;
}
