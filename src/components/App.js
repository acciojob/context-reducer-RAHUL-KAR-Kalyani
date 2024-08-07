// App.js
import React, { useState } from 'react';
import { useUser } from './UserContext';

const App = () => {
    const { user, login, logout } = useUser();
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // const handleAdd = () => {
    //     if (inputValue.trim()) {
    //         setList([...list, inputValue]);
    //         setInputValue('');
    //     }
    // };

    // const handleRemove = (item) => {
    //     setList(list.filter(i => i !== item));
    // };

    const handleClear = () => {
        setList([]);
    };

    return (
        <div>
            <h2>use Context Hook</h2>
            <h1>Hello {user.name}</h1>
            <h1>Component 2</h1>
            <h1>Component 3</h1>
            <h1>Component 4</h1>
            <h1>Component 5</h1>
            <div id="current-user">
                <h4>Current user: {user.name}, isAuthenticated: {user.isAuthenticated ? 'Yes' : 'No'}</h4>
            </div>
            <button id="login-btn" onClick={login}>Login</button>
            <button id="signout" onClick={logout}>Signout</button>  
            <br/>          
            <input
                id="shopping-input"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            {/* <button onClick={handleAdd}>Add</button> */}
            <br />
            <button id="clear-list" onClick={handleClear}>Clear List</button>
            <ul>
                {list.map(item => (
                    <li key={item} id={`item-${item}`}>
                        {item}
                        {/* <button id={`remove-${item}`} onClick={() => handleRemove(item)}>Remove</button> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
