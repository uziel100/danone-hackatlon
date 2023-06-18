import { Card, CardContent, Typography, CardActions, Skeleton } from '@mui/material';

const ProductCardSkeleton = () => (
  <Card elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
    <Skeleton
      variant="rectangular"
      sx={{ pt: '56.25%', transition: 'all 0.4s ease', ':hover': { cursor: 'pointer', backgroundSize: 'contain' } }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="body1" component="h4">
        <Skeleton variant="text" />
      </Typography>
      <Typography component="p" variant="body2">
        <Skeleton variant="text" />
      </Typography>
    </CardContent>
    <CardActions>
      <Skeleton variant="rectangular" width="100%" />
    </CardActions>
  </Card>
);

export default ProductCardSkeleton;
