import { useEffect } from 'react';
import { useProductsFilterContext } from '../contexts/results/ProductsFilterContext';
import useProductsService from './useProductsService';
import { productFiltersAdapter } from '../adapters/productAdapter';

const useProductFilters = () => {
  const { items, filters, onChangeData, onChangeFilters } = useProductsFilterContext();
  const { getProducts } = useProductsService();

  useEffect(() => {
    const whereFilters = productFiltersAdapter(filters);
    console.log({ filters, whereFilters });
    getProducts({ where: whereFilters }, { fetchPolicy: 'cache-first' }).then(products => {
      console.log({ products });
      onChangeData(products);
    });
  }, [filters]);

  return {
    products: items,
    filters,
    onChangeFilters
  };
};
export default useProductFilters;
