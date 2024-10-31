// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Aquí guardamos el estado del usuario

    const login = (userData) => {
        setUser(userData); // Establece el usuario autenticado
    };

    const logout = () => {
        setUser(null); // Elimina el usuario
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
