# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# 🛒 Proyecto Context - Carrito de Compras con React

Este proyecto es una aplicación de pizzas desarrollada con React que implementa un carrito de compras utilizando `React Context`. Permite al usuario agregar, eliminar y visualizar productos seleccionados desde distintas secciones de la app, mostrando el total actualizado tanto en el Navbar como en la página del carrito.

## 🚀 Tecnologías

- React
- React Router DOM
- Context API
- Vite
- CSS 


## ✅ Funcionalidades implementadas

### 1. Contexto para Carrito de Compras (2 puntos)
Se implementó `CartContext.jsx` en la carpeta `contexts` para manejar globalmente el estado del carrito. Este contexto proporciona funciones para:

- Agregar productos al carrito.
- Eliminar productos del carrito.
- Calcular el total del carrito.

### 2. Mostrar total en el Navbar (2 puntos)
El componente `Navbar.jsx` consume el contexto del carrito para mostrar en tiempo real el precio total de los productos agregados.

### 3. Añadir productos desde la página de Home (2 puntos)
Cada `CardPizza` incluye un botón que permite agregar pizzas al carrito directamente desde la página principal.

### 4. Página Cart: visualizar, agregar y eliminar (2 puntos)
En la página `Cart.jsx` se renderizan todos los productos agregados. Desde aquí el usuario puede:

- Ver detalles de cada producto en el carrito.
- Incrementar o eliminar productos.

### 5. Total sincronizado en Cart y Navbar (2 puntos)
El total del carrito es calculado y mostrado en ambas secciones (`Navbar` y `Cart`) utilizando el mismo estado global del contexto.

### 6. (Opcional) Contexto para Fetch de Pizzas
Puede extenderse para que las pizzas disponibles también se obtengan mediante un contexto global.

---

## 🖼️ Vista previa

![Vista previa del Home](http://localhost:5173/)  
![Vista previa del Carrito](http://localhost:5173/cart)

---

## 🧑‍💻 Instalación y uso

```bash
# Clona el repositorio
git clone https://github.com/Andreadavj/react-context.git

# Entra a la carpeta del proyecto
cd react-context/proyecto-context

# Instala dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev

📌 Recomendaciones
Usa useContext eficientemente para mantener el estado global sin prop-drilling.

Optimiza los cálculos de totales con useMemo si hay muchos productos.

👩‍💻 Autor
Doris Valverde Jara
Desarrolladora Frontend • GitHub

