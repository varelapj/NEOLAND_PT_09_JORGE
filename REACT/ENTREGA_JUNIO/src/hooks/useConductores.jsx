import { useContext } from "react";

import { ConductoresContext } from "../context/conductoresContext";

//* generamos un customhook para usar el context
export const useConductores = () => useContext(ConductoresContext);