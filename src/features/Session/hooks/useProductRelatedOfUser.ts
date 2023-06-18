import { useEffect, useState } from 'react';
import useError from '@/hooks/useError';
import useProductsService from '@/features/Products/hooks/useProductsService';
import { Product } from '@/features/Products/models/productModel';
import { useSessionContext } from '../context/SessionContext';

const useProductRelatedOfUser = () => {
  const { user } = useSessionContext();
  const { getProducts } = useProductsService();
  const [totalCount, setTotalCount] = useState(0);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const { logError } = useError();

  useEffect(() => {
    if (user) {
      setLoading(true);
      getProducts(
        {
          limit: 3,

          where: {
            energeticValue_lte: user.settings?.calories.remaining
          }
        },
        { fetchPolicy: 'cache-first' }
      )
        .then(response => {
          setTotalCount(response.totalCount);
          setProducts(response.items);
        })
        .catch(error => {
          logError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user?.settings?.calories.remaining]);

  const onGetMoreProducts = async () => {
    if (user) {
      try {
        setLoadingMore(true);
        const response = await getProducts(
          {
            limit: 3,
            skip: products?.length ?? 0,
            where: {
              energeticValue_lt: user.settings?.calories.remaining
            }
          },
          { fetchPolicy: 'no-cache' }
        );
        setTotalCount(response.totalCount);
        setProducts([...products!, ...response.items]);
      } catch (error) {
        logError(error);
      } finally {
        setLoadingMore(false);
      }
    }
  };

  const showLoadMore = (products?.length ?? 0) < totalCount;

  return {
    products,
    loading,
    loadingMore,
    onGetMoreProducts,
    showLoadMore
  };
};
export default useProductRelatedOfUser;
