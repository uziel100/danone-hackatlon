export interface Product {
  title: string;
  slug: string;
  image: string;
  description: any;
}

export interface ProductFilters {
  query?: string;
  isEcoFarming?: boolean;
}
