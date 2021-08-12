import { Router } from "express";
const rutas = Router();



import { getcomboboxzona, getSector

} from "../controllers/combobox.controllers";


  rutas.get('/Sectorcombobox',getSector);
  rutas.get('/Sectorcombobox/:id',getcomboboxzona);
 /*
  ruta.post('/persona',createPersona);
  ruta.get('/persona/:id',getPersonaid);
  ruta.put("/persona/:id", updatePersona);
  ruta.delete("/persona/:id", deletePersona);
  */
  export default rutas;