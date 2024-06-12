
import { Routes, Route } from "react-router-dom";
//* Importamos todas las páginas 
import { LoginPage } from "./pages/LoginPage";
import { InicioPage } from "./pages/InicioPage";
import  {RegistroPage}  from "./pages/RegistroPage";
import { PerfilPage } from "./pages/PerfilPage";
import { MultasPage } from "./pages/MultasPage";
import { CochesPage } from "./pages/CochesPage";
import { HomePage } from "./pages/HomePage";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { HomeLayout } from "./components/HomeLayout";

import "./App.css";

function App() {
  return (
    <Routes>
      {/*//* TODAS ESTAS ESÁN ENVUELTAS EN HOMELAYOUT SIN PROTEGER */}
      <Route element={<HomeLayout />}>
        <Route path='/' element={<InicioPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registro' element={<RegistroPage />} />
      </Route>
      {/*//* TODAS ESTAS ESÁN ENVUELTAS EN HOMELAYOUT PROTEGIDAS */}
      <Route path='/autorizado' element={<ProtectedLayout />}>
      <Route path='home' element={<HomePage />} />
        <Route path='profile' element={<PerfilPage />} />
        <Route path='coches' element={<CochesPage />} />
        <Route path='multas' element={<MultasPage />} />

      </Route>
    </Routes>
  );
}

export default App;
