import { useContext } from "react";

import { MultasContext } from "../context/multasContext";

//* generamos un customhook para usar el context
export const useMultas = () => useContext(MultasContext);