"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var rutas = express_1.Router();
var combobox_controllers_1 = require("../controllers/combobox.controllers");
rutas.get('/Sectorcombobox', combobox_controllers_1.getSector);
rutas.get('/Sectorcombobox/:id', combobox_controllers_1.getcomboboxzona);
/*
 ruta.post('/persona',createPersona);
 ruta.get('/persona/:id',getPersonaid);
 ruta.put("/persona/:id", updatePersona);
 ruta.delete("/persona/:id", deletePersona);
 */
exports.default = rutas;
