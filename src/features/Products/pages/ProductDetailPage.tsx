import { Box } from '@mui/material';
import { BpTypography } from '@/components/shared';

const ProductDetailPage = () => (
  <Box
    width="100%"
    height="100%"
    display="flex"
    flexDirection="column"
    gap={2}
    alignItems="center"
    justifyContent="center"
  >
    <Box borderRadius={4} padding="24px 32px" bgcolor="white" width="100%" maxWidth={562}>
      <BpTypography mb={3} textAlign="left" component="p" fontWeight={700} color="primary.main" variant="h3">
        ProductDetailPage
      </BpTypography>
    </Box>
  </Box>
);

export default ProductDetailPage;
