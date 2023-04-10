import axios from "axios";

export const getUsers = async ()=>{
  const response = await axios("http://localhost:3000/api/users").catch((err) =>
  console.log(err)
);
  return response.data
}

export const getProducts = async () => {
  const response = await axios("http://localhost:3000/api/products").catch((err) =>
    console.log(err)
  );
    return response.data
//   return response;
};
