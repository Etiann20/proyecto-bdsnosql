import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Usuarios from "./pages/Usuarios";
import Tecnicos from "./pages/Tecnicos";
import Equipos from "./pages/Equipos";
import Incidentes from "./pages/Incidentes";
import Bitacoras from "./pages/Bitacoras";
import Login from "./pages/Login";
import Evidencias from "./pages/Evidencias";

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

                        <ProtectedRoute
                            roles={[
                                "Administrador",
                                "Supervisor",
                                "Analista"
                            ]}
                        >

                            <Home />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/usuarios"

                    element={

                        <ProtectedRoute
                            roles={[
                                "Administrador"
                            ]}
                        >

                            <Usuarios />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/tecnicos"

                    element={

                        <ProtectedRoute
                            roles={[
                                "Administrador",
                                "Supervisor"
                            ]}
                        >

                            <Tecnicos />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/equipos"

                    element={

                        <ProtectedRoute
                            roles={[
                                "Administrador",
                                "Supervisor"
                            ]}
                        >

                            <Equipos />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/incidentes"

                    element={

                        <ProtectedRoute
                            roles={[
                                "Administrador",
                                "Supervisor",
                                "Analista"
                            ]}
                        >

                            <Incidentes />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/bitacoras"

                    element={

                        <ProtectedRoute
                            roles={[
                                "Administrador",
                                "Supervisor"
                            ]}
                        >

                            <Bitacoras />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/evidencias"

                    element={

                        <ProtectedRoute
                            roles={[
                                "Administrador",
                                "Supervisor"
                            ]}
                        >

                            <Evidencias />

                        </ProtectedRoute>

                    }

                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;