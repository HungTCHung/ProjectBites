import React, { useEffect, useState } from "react";

const UserContext = React.createContext(null);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    token: "",
    account: {},
  });
  const loginContext = (userDataLogin) => {
    let dataFromLocalStorage = JSON.parse(
      localStorage.getItem("UserDataLogin")
    );
    console.log("isAUthen2", dataFromLocalStorage);
    console.log("isAUthen2", dataFromLocalStorage.isAuthenticated);
    console.log("isAUthen3", dataFromLocalStorage.token);
    console.log("isauthe4", dataFromLocalStorage.account.groupWithRole);
    setUser({
      isAuthenticated: dataFromLocalStorage.isAuthenticated,
      token: dataFromLocalStorage.token,
      account: dataFromLocalStorage.account,
    });
    console.log("check user from 123 ", user);
  };

  const logout = () => {
    setUser({
      isAuthenticated: false,
      token: "",
      account: {},
    });
  };
  // const fetchUser = async () => {
  //   let response = await getUserAccount();
  // };
  useEffect(() => {
    console.log("check user lan n", user);
  }, [user]);
  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
