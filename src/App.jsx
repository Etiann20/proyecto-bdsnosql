import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import Tecnicos from "./pages/Tecnicos";
import Equipos from "./pages/Equipos";
import Incidentes from "./pages/Incidentes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/tecnicos" element={<Tecnicos />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/incidentes" element={<Incidentes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;