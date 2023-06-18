import { FC } from 'react';
import { Button, Card, CardContent, CardMedia, Typography, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  title: string;
  image: string;
  description: string;
}
const ProductCard: FC<Props> = ({ title, image, description }) => (
  <Card elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
    <CardMedia
      component="div"
      sx={{
        pt: '56.25%',
        transition: 'all 0.4s ease',
        ':hover': {
          cursor: 'pointer',
          backgroundSize: 'contain'
        }
      }}
      image={image}
      title={title}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="body1" component="h4">
        {title}
      </Typography>
      <Typography component="p" variant="body2">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        sx={{
          borderRadius: 4
        }}
        fullWidth
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<AddIcon />}
      >
        Agregar
      </Button>
    </CardActions>
  </Card>
);

export default ProductCard;
