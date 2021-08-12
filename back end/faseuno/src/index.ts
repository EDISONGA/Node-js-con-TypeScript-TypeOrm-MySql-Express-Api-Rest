import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'
import personaRouter from './rutas/persona.rutas'
import comboboxRouter from './rutas/combobox.rutas'


const app = express();
createConnection();

// Middlewares se ejecuta antes de llegar a la rutas
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//rutas
app.use(personaRouter);
app.use(comboboxRouter);


app.listen(3000);
console.log('Server on port', 3000);