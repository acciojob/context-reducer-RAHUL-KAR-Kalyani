// src/App.js
import React from 'react';
import { useAppContext } from './AppContext';

const App = () => {
  const {
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
  } = useAppContext();

  return (
    <div>
      <button id="login-btn" onClick={login}>
        Login
      </button>
      <button id="signout" onClick={signout}>
        Signout
      </button>
      <div id="current-user">
        Current user: {currentUser || ''}, isAuthenticated: {isAuthenticated ? 'Yes' : 'No'}
      </div>
      <input
        id="shopping-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <button id="clear-list" onClick={clearItems}>
        Clear
      </button>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item}
            <button id={`remove-${item}`} onClick={() => removeItem(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
