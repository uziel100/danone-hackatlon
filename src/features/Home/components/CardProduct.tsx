import { FC } from 'react';
import { Button, Card, CardContent, CardMedia, Typography, CardActions } from '@mui/material';

interface Props {
  title: string;
  image: string;
  description: string;
}
const CardProduct: FC<Props> = ({ title, image, description }) => (
  <Card elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardMedia
      component="div"
      sx={{
        pt: '56.25%'
      }}
      image={image}
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
      >
        Ver mas
      </Button>
    </CardActions>
  </Card>
);

export default CardProduct;
