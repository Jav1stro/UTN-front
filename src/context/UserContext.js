import { createContext, useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { getUsers } from "../services/index";

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const router = useRouter();
  const inputTextRef = useRef(null);
  const inputPassRef = useRef(null);

  const [userInfo, setUserInfo] = useState(null);
  const [loginValidations, setloginValidations] = useState(false);
  const [validationsMessage, setValidationsMessage] = useState("");

  const loginHandler = async () => {
    if (!inputTextRef.current.value || !inputPassRef.current.value) {
      setloginValidations(true);
      setValidationsMessage("Debes completar los campos");
    } else {
      const users = await getUsers();
      users.map((user) => {
        if (
          user.email === inputTextRef.current.value &&
          user.password === inputPassRef.current.value
        ) {
          console.log("logea!");
          localStorage.setItem("user", JSON.stringify(user));
          setUserInfo(user);
          setloginValidations(false);
          setValidationsMessage("");
          router.push("/");
        } else {
          setloginValidations(true);
          setValidationsMessage("Las credenciales ingresadas son incorrectas");
        }
      });
    }
  };

  const logoutHandler = () => {
    setUserInfo(null);
    localStorage.removeItem("user");
    router.push("/");
  };

  useEffect(() => {
    const userLogged = localStorage.getItem("user");
    if (userLogged) {
      setUserInfo(JSON.parse(userLogged));
    } else {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const context = {
    userInfo,
    loginValidations,
    validationsMessage,
    loginHandler,
    logoutHandler,
    inputTextRef,
    inputPassRef,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;
