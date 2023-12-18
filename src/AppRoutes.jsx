import { Navigate, Route, Routes } from "react-router-dom";
import { Idiomas } from "./pages/Idiomas";
import { RendicionCuentas } from "./pages/RendicionCuentas";
import { Grados } from "./pages/Grados";
import { RutasBuses } from "./pages/RutasBuses";
import { Home } from "./pages/Home";
import { Historia } from "./pages/Historia";
import DEADV from "./pages/DEADV";
import { Posgrados } from "./pages/Posgrados";
import { Autoridades } from "./pages/Autoridades";
import { Himno } from "./pages/Himno";
import Calendars from "./pages/Calendars";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to={"/inicio"}></Navigate>} />
      <Route exact path="/inicio" element={<Home />} />
      <Route exact path="/programas-de-estudio/grado" element={<Grados />} />
      <Route
        exact
        path="/programas-de-estudio/posgrados"
        element={<Posgrados />}
      />
      <Route
        exact
        path="/programas-de-estudio/educacion-continua"
        element={<DEADV />}
      />
      <Route exact path="/programas-de-estudio/idiomas" element={<Idiomas />} />
      <Route
        exact
        path="/nosotros/aurtoridades"
        element={<Autoridades/>}
      />
      <Route
        exact
        path="/nosotros/rendicion-de-cuentas"
        element={<RendicionCuentas />}
      />
      <Route exact path="/nosotros/historia" element={<Historia />} />
      <Route exact path="/calendars/*" element={<Calendars />} />
      <Route exact path="/nosotros/himno" element={<Himno />} />
      <Route exact path="/nosotros/ruta-de-buses" element={<RutasBuses />} />
    </Routes>
  );
};

export default AppRoutes;
