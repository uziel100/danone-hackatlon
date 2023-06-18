import { useEffect, useState } from 'react';
import useError from '@/hooks/useError';
import { useProductsFilterContext } from '../contexts/results/ProductsFilterContext';
import useProductsService from './useProductsService';
import { productFiltersAdapter } from '../adapters/productAdapter';

const useProductFilters = () => {
  const {
    items,
    filters,
    onChangeData,
    onChangeFilters,
    onChangeLoading,
    loading,
    pagination,
    totalCount,
    onAddItems
  } = useProductsFilterContext();
  const { logError } = useError();
  const { getProducts } = useProductsService();
  const [loadingFetchingMore, setLoadingFetchingMore] = useState(false);

  useEffect(() => {
    onChangeLoading(true);
    const whereFilters = productFiltersAdapter(filters);
    getProducts({ limit: pagination.limit, where: whereFilters }, { fetchPolicy: 'cache-first' })
      .then(data => {
        onChangeData(data);
      })
      .catch(error => {
        logError(error);
      })
      .finally(() => onChangeLoading(false));
  }, [filters]);

  const onFetchMore = () => {
    setLoadingFetchingMore(true);
    const whereFilters = productFiltersAdapter(filters);
    getProducts(
      { limit: pagination.limit, skip: items?.length ?? 0, where: whereFilters },
      { fetchPolicy: 'cache-first' }
    )
      .then(data => {
        onAddItems(data.items);
      })
      .catch(error => {
        logError(error);
      })
      .finally(() => setLoadingFetchingMore(false));
  };

  const showLoadMore = (items?.length ?? 0) < totalCount;

  return {
    products: items,
    filters,
    onChangeFilters,
    loading,
    showLoadMore,
    onFetchMore,
    loadingFetchingMore
  };
};
export default useProductFilters;
