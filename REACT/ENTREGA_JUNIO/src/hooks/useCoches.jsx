import { useContext } from "react";

import { CochesContext } from "../context/cochesContext";
//* generamos un customhook para usar el context
export const useCoches = () => useContext(CochesContext);