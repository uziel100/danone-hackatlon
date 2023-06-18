import { Product, ProductFilters } from '../../models/productModel';
import { ProductsFilterContextState } from './ProductsFilterContext';

type ProductsFilterActionTypes =
  | { type: 'UPDATE_LOADING'; payload: boolean }
  | { type: 'SET_DATA'; payload: Product[] }
  | { type: 'UPDATE_FILTERS'; payload: Partial<ProductFilters> };

const productsFilterReducer = (
  state: ProductsFilterContextState,
  action: ProductsFilterActionTypes
): ProductsFilterContextState => {
  switch (action.type) {
    case 'UPDATE_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'SET_DATA':
      return {
        ...state,
        items: action.payload
      };
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default productsFilterReducer;
