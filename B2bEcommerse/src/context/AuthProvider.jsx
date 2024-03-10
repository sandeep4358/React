import { createContext, useState } from "react";
const AuthContext = createContext({});

const AuthProvider = ({ childern }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {childern}
    </AuthContext.Provider>
  );
};

export default AuthContext;
