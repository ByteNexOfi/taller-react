import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="src/assets/react.svg"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl font-bold">Panel Administrativo React</h1>
          <p>Por: Santiago Andres Rivas Chapon E191</p>
        </div>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/clientes"
              className={({ isActive }) =>
                isActive ? "underline text-white font-bold" : "hover:underline"
              }
            >
              Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/proveedor"
              className={({ isActive }) =>
                isActive ? "underline text-white font-bold" : "hover:underline"
              }
            >
              Proveedor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/usuarios"
              className={({ isActive }) =>
                isActive ? "underline text-white font-bold" : "hover:underline"
              }
            >
              Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive ? "underline text-white font-bold" : "hover:underline"
              }
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
