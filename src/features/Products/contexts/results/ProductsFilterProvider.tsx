import { FC, useReducer, useMemo } from 'react';
import ProductsFilterContext, { ProductsFilterContextState } from './ProductsFilterContext';
import ProductsFilterReducer from './productsFilterReducer';
import { Product, ProductFilters } from '../../models/productModel';

const INITIAL_STATE: ProductsFilterContextState = {
  loading: false,
  filters: {},
  pagination: {},
  items: []
};

interface ProductsFilterProviderProps {
  children: React.ReactNode;
}

const ProductsFilterProvider: FC<ProductsFilterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsFilterReducer, INITIAL_STATE);

  const onChangeLoading = (loading: boolean) => dispatch({ type: 'UPDATE_LOADING', payload: loading });
  const onChangeFilters = (filters: Partial<ProductFilters>) => dispatch({ type: 'UPDATE_FILTERS', payload: filters });
  const onChangeData = (data: Product[]) => dispatch({ type: 'SET_DATA', payload: data });

  const memorized = useMemo(() => ({ ...state, onChangeLoading, onChangeFilters, onChangeData }), [state]);

  return <ProductsFilterContext.Provider value={memorized}>{children}</ProductsFilterContext.Provider>;
};

export default ProductsFilterProvider;
