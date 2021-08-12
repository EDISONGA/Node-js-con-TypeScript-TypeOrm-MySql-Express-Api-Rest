import { Router } from "express";

const ruta = Router();


import {
  createPersona,
    deletePersona,



    getPersona,
   // getSectorq,
    getPersonaid,
  
    getPersonas,
  
    updatePersona
  
  } from "../controllers/personas.controllers";
ruta.get('/persona',getPersona);
ruta.get('/personaidSector/:id',getPersonas);
ruta.post('/persona',createPersona);
ruta.get('/persona/:id',getPersonaid);
ruta.put("/persona/:id", updatePersona);
ruta.delete("/persona/:id", deletePersona);
//ruta.get('/Sectorcombobox', getSectorq );

export default ruta;