import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import Tecnicos from "./pages/Tecnicos";
import Equipos from "./pages/Equipos";
import Incidentes from "./pages/Incidentes";
import Login from "./pages/Login";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route

                    path="/login"

                    element={<Login />}

                />

                <Route

                    path="/"

                    element={

                        <ProtectedRoute>

                            <Home />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/usuarios"

                    element={

                        <ProtectedRoute>

                            <Usuarios />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/tecnicos"

                    element={

                        <ProtectedRoute>

                            <Tecnicos />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/equipos"

                    element={

                        <ProtectedRoute>

                            <Equipos />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/incidentes"

                    element={

                        <ProtectedRoute>

                            <Incidentes />

                        </ProtectedRoute>

                    }

                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;