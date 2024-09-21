import { createContext, useState } from 'react';
export const MyContext = createContext("");

const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(!!localStorage.getItem("access_token"));
  const [url, setUrl] = useState()
  const [role, setRole] = useState()
  const [verified, setVerified] = useState(localStorage.getItem("is_verified"));
  const [status, setStatus] = useState()

  console.log("verified", verified)
  
  return (
    <MyContext.Provider value={{login, setLogin, role, setRole, verified, setVerified, status, setStatus}}>
      {children}
    </MyContext.Provider>
  );
};

const withUser = (Child) => (props) => (
  <MyContext.Consumer>
    {(context) => <Child {...props} {...context} />}
  </MyContext.Consumer>
);

export { UserProvider, withUser };