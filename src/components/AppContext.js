// src/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const login = () => {
    setIsAuthenticated(true);
    setCurrentUser('rohan');
  };

  const signout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter(item => item !== itemToRemove));
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        items,
        inputValue,
        setInputValue,
        login,
        signout,
        addItem,
        removeItem,
        clearItems
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
