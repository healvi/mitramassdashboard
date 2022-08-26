import React, { createContext, useEffect } from "react";
import { resultInSeconds } from "../Utils/getTime";
import { deleteAuthSession, getSession } from "../Utils/Session";
const AuthContext = createContext();
const AuthContextProvider = (props) => {
  useEffect(() => {
    const expired = getSession("experied");
    const times = resultInSeconds;
    if (expired <= times) {
      deleteAuthSession();
    }
  }, []);
  return (
    <AuthContext.Provider value={""}>{props.children}</AuthContext.Provider>
  );
};
export { AuthContextProvider };
export default AuthContext;
