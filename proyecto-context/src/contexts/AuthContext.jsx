// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext();

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado inicial del usuario

    // Cargar el usuario del localStorage al iniciar la aplicación
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Establece el usuario desde localStorage
        }
    }, []);

    // Función para iniciar sesión
    const login = (userData) => {
        try {
            setUser(userData); // Establece el usuario autenticado
            localStorage.setItem("user", JSON.stringify(userData)); // Guarda el usuario en localStorage
        } catch (error) {
            console.error("Error al iniciar sesión:", error); // Manejo de errores
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        setUser(null); // Elimina el usuario
        localStorage.removeItem("user"); // Elimina el usuario de localStorage
    };

    // Proporciona el contexto a los hijos
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para utilizar el contexto de autenticación
export const useAuth = () => {
    return useContext(AuthContext); // Permite acceder al contexto fácilmente
};