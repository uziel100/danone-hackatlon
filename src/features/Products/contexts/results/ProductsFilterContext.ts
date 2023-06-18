import { createContext, useContext } from 'react';
import { Product, ProductFilters } from '../../models/productModel';

export interface ProductsFilterContextState {
  loading: boolean;
  pagination: any;
  filters: ProductFilters;
  items: any[] | null;
}

export interface ProductsFilterContextProps extends ProductsFilterContextState {
  onChangeLoading: (loading: boolean) => void;
  onChangeData: (data: Product[]) => void;
  onChangeFilters: (filters: any) => void;
}

const ProductsFilterContext = createContext({} as ProductsFilterContextProps);

export const useProductsFilterContext = (): ProductsFilterContextProps => {
  const context = useContext(ProductsFilterContext);
  if (Object.entries(context).length === 0) {
    throw new Error('useProductsFilterContext must be used within a ProductsFilterContextProvider');
  }
  return context;
};

export default ProductsFilterContext;
