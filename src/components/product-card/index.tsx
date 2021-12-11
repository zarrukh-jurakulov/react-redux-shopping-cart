import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useStyles } from "./styles";

const ProductCard = () => {
  const classes = useStyles();
  return (
    <Container>
      <Card sx={{ maxWidth: "350px" }}>
        <CardMedia
          component='img'
          height='200'
          image='https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339_1280.jpg'
        />
        <CardContent>
          <Typography className={classes.header} variant='h6'>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Typography>
          <Typography
            className={classes.parapraph}
            variant='body2'
            color='text.secondary'>
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </Typography>
          <Typography className={classes.price} variant='body1'>
            $109.95
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button>Add to Cart</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ProductCard;
