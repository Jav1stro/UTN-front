import { Box } from "@mui/material";
import LoginForm from "../../components/loginForm";
const LoginPage = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "#6c9f94", display:'flex',
    justifyContent:'center',alignItems:'center' }}>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
