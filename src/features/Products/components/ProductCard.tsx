import { FC } from 'react';
import { Button, Card, CardContent, CardMedia, Typography, CardActions, Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  title: string;
  image: string;
  calories: number;
  onClick: () => void;
  onAdd: () => void;
}
const ProductCard: FC<Props> = ({ title, image, onClick, onAdd, calories }) => (
  <Card
    elevation={0}
    sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, position: 'relative' }}
  >
    <Chip
      sx={{
        position: 'absolute',
        top: 8,
        right: 8
      }}
      size="small"
      color="error"
      label={`${calories} kcal`}
    />
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
      onClick={onClick}
      image={image}
      title={title}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="body1" component="h4">
        {title}
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
        onClick={onAdd}
      >
        Agregar
      </Button>
    </CardActions>
  </Card>
);

export default ProductCard;
