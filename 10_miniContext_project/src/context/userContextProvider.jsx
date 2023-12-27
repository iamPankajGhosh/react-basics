import { useState } from "react";
import UserContaxt from "./userContext";

const UserContaxtProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContaxt.Provider value={{ user, setUser }}>
      {children}
    </UserContaxt.Provider>
  );
};

export default UserContaxtProvider;
