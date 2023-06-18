import { FC } from 'react';
import { Button, Card, CardContent, CardMedia, Typography, CardActions } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface Props {
  title: string;
  image: string;
  onClick: () => void;
}
const CardProduct: FC<Props> = ({ title, image, onClick }) => (
  <Card elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardMedia
      component="div"
      sx={{
        pt: '56.25%'
      }}
      image={image}
      title={title}
      onClick={onClick}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography fontWeight={600} gutterBottom variant="body1" component="h4">
        {title}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        sx={{
          borderRadius: 4,
          transition: 'all 800ms ease',
          '& .MuiButton-endIcon': {
            display: 'none'
          },
          '&:hover .MuiButton-endIcon': {
            display: 'flex'
          }
        }}
        fullWidth
        variant="contained"
        color="primary"
        size="small"
        endIcon={<ArrowRightAltIcon />}
        onClick={onClick}
      >
        Ver mas
      </Button>
    </CardActions>
  </Card>
);

export default CardProduct;
