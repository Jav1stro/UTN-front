import React from "react";
import { Box, Typography } from "@mui/material";
import Products from "../../components/products";
import SpeedDial from "../../components/speedDial";
import { getProducts } from "../../services";

const ProductsPage = ({ products }) => {
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
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <Products products={products} />
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
  console.log("asd", products);
  return {
    props: { products },
  };
}
