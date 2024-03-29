"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var persona_rutas_1 = __importDefault(require("./rutas/persona.rutas"));
var combobox_rutas_1 = __importDefault(require("./rutas/combobox.rutas"));
var app = express_1.default();
typeorm_1.createConnection();
// Middlewares se ejecuta antes de llegar a la rutas
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
//rutas
app.use(persona_rutas_1.default);
app.use(combobox_rutas_1.default);
app.listen(3000);
console.log('Server on port', 3000);
