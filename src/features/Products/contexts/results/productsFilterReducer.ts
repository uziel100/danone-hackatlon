import { Product, ProductFilters, ProductList } from '../../models/productModel';
import { ProductsFilterContextState } from './ProductsFilterContext';

type ProductsFilterActionTypes =
  | { type: 'UPDATE_LOADING'; payload: boolean }
  | { type: 'SET_DATA'; payload: ProductList }
  | { type: 'UPDATE_FILTERS'; payload: Partial<ProductFilters> }
  | { type: 'ADD_ITEMS'; payload: Product[] };

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
        totalCount: action.payload.totalCount,
        items: action.payload.items
      };
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    case 'ADD_ITEMS':
      return {
        ...state,
        items: state.items?.length ? [...state.items, ...action.payload] : [...action.payload]
      };

    default:
      return state;
  }
};

export default productsFilterReducer;
