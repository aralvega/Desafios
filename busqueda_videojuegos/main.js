//import {videojuegos,buscarPorId,buscarPorNombre,buscarPorFecha } from "./services/videojuegoService.js";
//console.log(buscarPorId(videojuegos,2));
//console.log(buscarPorNombre(videojuegos,'Mario'));
//console.log(buscarPorFecha(videojuegos,'1990-11-21'));

import { videojuegos } from "./services/videojuegoService.js";
import { inicializarTabla } from "./components/videojuegoTabla.js";
import { inicializarBuscador } from "./components/searchForm.js";

document.addEventListener('DOMContentLoaded',()=>{
    inicializarTabla('videogames-table',videojuegos);
    inicializarBuscador(videojuegos);
});
