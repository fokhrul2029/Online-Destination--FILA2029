/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    



  const authInfo = "Hello World";

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
