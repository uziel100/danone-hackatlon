import { createContext, useContext } from 'react';
import { Product, ProductFilters, ProductList, ProductPagination } from '../../models/productModel';

export interface ProductsFilterContextState {
  loading: boolean;
  pagination: ProductPagination;
  totalCount: number;
  filters: ProductFilters;
  items: Product[] | null;
}

export interface ProductsFilterContextProps extends ProductsFilterContextState {
  onChangeLoading: (loading: boolean) => void;
  onChangeData: (data: ProductList) => void;
  onChangeFilters: (filters: any) => void;
  onAddItems: (data: Product[]) => void;
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
