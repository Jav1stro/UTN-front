import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Products = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Card sx={{ minWidth:'345px' }}>
          <CardActionArea sx={{
            backgroundColor: '#ece81a99'
          }}>
            <CardMedia
              component="img"
              height="140"
              image="/assets/boca.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Color: {product.color}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Size: {product.size}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Price: {product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{
            backgroundColor: '#90d3c4;'
          }}>
            <Button size="small" color="primary" sx={{color:'#d7f5ee'}}>
              Add to cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
export default Products;
