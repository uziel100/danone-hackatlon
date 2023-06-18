import { FC, useReducer, useMemo } from 'react';
import ProductsFilterContext, { ProductsFilterContextState } from './ProductsFilterContext';
import ProductsFilterReducer from './productsFilterReducer';
import { Product, ProductFilters, ProductList } from '../../models/productModel';

const INITIAL_STATE: ProductsFilterContextState = {
  loading: false,
  filters: {
    query: '',
    energeticValue: 0,
    isEcoFarming: false
  },
  totalCount: 0,
  pagination: {
    limit: 9,
    skip: 0
  },
  items: null
};

interface ProductsFilterProviderProps {
  children: React.ReactNode;
}

const ProductsFilterProvider: FC<ProductsFilterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsFilterReducer, INITIAL_STATE);

  const onChangeLoading = (loading: boolean) => dispatch({ type: 'UPDATE_LOADING', payload: loading });
  const onChangeFilters = (filters: Partial<ProductFilters>) => dispatch({ type: 'UPDATE_FILTERS', payload: filters });
  const onChangeData = (data: ProductList) => dispatch({ type: 'SET_DATA', payload: data });
  const onAddItems = (data: Product[]) => dispatch({ type: 'ADD_ITEMS', payload: data });

  const memorized = useMemo(() => ({ ...state, onChangeLoading, onChangeFilters, onChangeData, onAddItems }), [state]);

  return <ProductsFilterContext.Provider value={memorized}>{children}</ProductsFilterContext.Provider>;
};

export default ProductsFilterProvider;
