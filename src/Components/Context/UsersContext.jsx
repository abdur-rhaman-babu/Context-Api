/* eslint-disable react/prop-types */
// create Context
import { createContext, useState } from "react";
export const UsersContext = createContext({});

// eslint-disable-next-line no-unused-vars
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UserProvider;
