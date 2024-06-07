//* importamos navigate y el outlet porque vamos a hacer una comprobación de usuario
//* si hay usuario mostramso ela página con el outlet, si no, no
import { Navigate, useOutlet } from "react-router-dom";

//* improtamos el contexto, para saber si hay o no usuario, para saber si es portegido 
import { useAuth } from "../hooks/useAuth";

//* improtamso appbar común a todas las páginas

import { AppBar } from "./AppBar";

export const ProtectedLayout = () =>{
  //*extraemos el usuario de lcontexto
const {user} = useAuth()
//*lanzamos el outlet
const outlet = useOutlet()

//* si no hay usuario, solo píntame el appbar
if (!user) {
  return <Navigate to='/' />
}

return (
  <div>
<AppBar pages={[
  {label: "Settings", path: "settings"},
  {label: "Profile", path: "profile"},
]}/>
{outlet}

  </div>
)

//* si no (si hay user) pinta el appbar y las páginas



}



