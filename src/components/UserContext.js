// UserContext.js
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', isAuthenticated: false });

  const login = () => {
    setUser({ name: 'Rohan Dutt', isAuthenticated: true });
  };

  const logout = () => {
    setUser({ name: '', isAuthenticated: false });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
