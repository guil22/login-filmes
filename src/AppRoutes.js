import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home/index";
import Detalhes from "./Pages/Home/Detalhes";
import Filme from "./Pages/Home/Filme";
import { AuthProvider, AuthContext } from "./contexts/auth";
import { PesqProvider, PesqContext } from "./contexts/Context";
import Cadastro from "./Pages/Cadastro";

function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated, load } = useContext(AuthContext);

    if (load) {
      return <div className="load">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <PesqProvider>
        <AuthProvider>
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/Cadastro" element={<Cadastro />} />

            <Route
              path="/"
              element={
                <Private>
                  <Home />
                </Private>
              }
            />
            <Route
              path="/search/:title"
              element={
                <Private>
                  <Filme />
                </Private>
              }
            />
            <Route path="/:id" element={<Detalhes />} />
          </Routes>
        </AuthProvider>
      </PesqProvider>
    </Router>
  );
}

export default AppRoutes;
