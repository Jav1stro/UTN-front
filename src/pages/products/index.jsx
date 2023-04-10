import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import Products from "../../components/products";
import SpeedDial from "../../components/speedDial";
import { getProducts } from "../../services";

const ProductsPage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toString().includes(searchTerm)
  );

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100wh",
        height: "100%",
        backgroundColor: "#6c9f94",
        textAlign: "center",
        padding: "40px 0",
        position: "relative",
      }}
    >
      <Typography sx={{ color: "#003429" }} variant="h2">
        products
      </Typography>

      <Box
        sx={{
          width: "80%",
          height: "fit-content",
          justifyContent: "flex-start",
          margin: "70px auto",
          display: "flex",
          flexDirection:'column',
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Buscar productos"
          value={searchTerm}
          onChange={handleSearchTermChange}
          sx={{ marginBottom: "20px", width:'50%',margin:'auto' }}
        />
        <Products products={filteredProducts} />
      </Box>
      <Box sx={{ position: "absolute", top: "20px", right: "20px" }}>
        <SpeedDial />
      </Box>
    </Box>
  );
};

export default ProductsPage;

export async function getServerSideProps() {
  const products = await getProducts();
  console.log("products", products);
  return {
    props: { products },
  };
}
