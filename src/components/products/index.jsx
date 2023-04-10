import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Products = ({ products }) => {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: '650px',
        margin: "auto",
      }}
    >
      {products.map((product, i) => (
        <ImageListItem key={i} sx={{margin:'0 auto 20px', width:'70%'}}>
          <img
            src={`/assets/boca.jpg`}
            srcSet={`/assets/boca.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={product.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={product.name}
            subtitle={<span>Price {product.price}</span>}
            position="below"
            sx={{backgroundColor:'#324b46'}}
          />

          <Button variant="contained" color="success">Agregar al carrito</Button>
        </ImageListItem>
      ))}
    </ImageList>
  );
};
export default Products;
