import { useContext, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Input } from "../input/Input";
import { Alert } from '../Alert'
import UserContext from "../../context/UserContext";

const LoginForm = () => {
  const {
    inputTextRef,
    inputPassRef,
    loginHandler,
    validationsMessage,
    loginValidations,
  } = useContext(UserContext);

  const [showPass, setShowPass] = useState(false);

  const showPassHandler = () => {
    setShowPass(!showPass);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    loginHandler();
  };

  useEffect(() => {}, [loginValidations, validationsMessage]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <form
        onSubmit={submitFormHandler}
        style={{
          borderRadius: "30px",
          width: "630px",
          minHeight: "470px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ffffff",
          margin: "50px",
        }}
      >
        <h2
          style={{
            marginTop: "63px",
            marginBottom: "32px",
            fontWeight: "700",
            fontSize: "24px",
            fontStyle: "normal",
            color: "black",
          }}
        >
          Ingresá a la plataforma
        </h2>

        {loginValidations && (
          <Alert
            type="danger"
            width="380px"
            height="52px"
            margin="0 0 16px"
            text={validationsMessage}
          />
        )}

        <div>
          <Input
            label="E-mail"
            type="email"
            ref={inputTextRef}
            validations={loginValidations}
            placeholder="ingresa con tu e-mail registrado"
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Input
              label="Contraseña"
              type={showPass}
              ref={inputPassRef}
              validations={loginValidations}
              placeholder={"Ingresa tu contraseña..."}
            />
            <div
              onClick={showPassHandler}
              style={{
                width: "20px",
                height: "20px",
                top: "45px",
                right: "21px",
                position: "absolute",
                cursor: "pointer",
              }}
            >
            </div>
          </div>
        </div>

        <button type="submit"> Ingresar</button>
      </form>
    </div>
  );
};

export default LoginForm;
