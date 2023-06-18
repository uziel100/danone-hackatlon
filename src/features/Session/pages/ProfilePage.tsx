import { BpTypography } from '@/components/shared';
import { Container, Box, Grid, Alert } from '@mui/material';
import ProductList from '@/features/Products/components/ProductList';
import { useSessionContext } from '../context/SessionContext';
import useProductRelatedOfUser from '../hooks/useProductRelatedOfUser';
import ProfileSetting from '../components/ProfileSetting';

const ProfilePage = () => {
  const { user } = useSessionContext();
  const { products, loading, loadingMore, onGetMoreProducts, showLoadMore } = useProductRelatedOfUser();

  return (
    <Box mt={3}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={5}>
            <ProfileSetting />
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <BpTypography mb={1} component="p" variant="body1">
              Productos que puedes consumir de acuerdo a tu límite de calorías
            </BpTypography>
            <Alert severity="info" sx={{ mb: 2 }}>
              Solo se muestran los productos menores o igual a {user?.settings?.calories.remaining || 0}Kcal
            </Alert>
            <ProductList
              products={products}
              loading={loading}
              loadingFetchingMore={loadingMore}
              onFetchMore={onGetMoreProducts}
              showLoadMore={showLoadMore}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default ProfilePage;
