import React from "react";

const Profile = () => {
  // Email y botón de logout estáticos por ahora
  const email = "usuario@example.com";

  const handleLogout = () => {
    alert("Sesión cerrada");
    // Aquí más adelante se implementará la lógica real de cierre de sesión
  };

  return (
    <div className="profile">
      <h2>Perfil de Usuario</h2>
      <p>Email: {email}</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
