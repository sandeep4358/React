import { useContext } from "react";
import AuthContext from "../compnents/context/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
