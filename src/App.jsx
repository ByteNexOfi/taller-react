import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Clientes from "./pages/Clientes";
import Proveedor from "./pages/Proveedor";
import Usuarios from "./pages/Usuarios";
import Logout from "./pages/Logout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/proveedor" element={<Proveedor />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
