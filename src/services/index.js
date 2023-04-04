import axios from "axios";

export const getProducts = async () => {
  const response = await axios("http://localhost:3001/api/hello").catch((err) =>
    console.log(err)
  );
    return response.data
//   return response;
};
