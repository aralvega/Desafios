import { buscarPorId,buscarPorNombre,buscarPorFecha } from "../services/videojuegoService.js";
import { inicializarTabla } from "./videojuegoTabla.js";

export const inicializarBuscador = (data)=>{
    const container = document.getElementById('search-form');
    container.innerHTML = `
        <div class="search-controls">
            <label><input type='radio' name='filtro' value='id'>ID</label>
            <label><input type='radio' name='filtro' value='nombre'>Nombre</label>
            <label><input type='radio' name='filtro' value='fecha'>Fecha</label>
            <input type='text' id='inputValor' placeholder='Ingrese valor' disabled>
            <button id='btnBuscar'>Buscar</button>
            <label><input type='checkbox' id='chkLimpiar'>Limpiar</label>
        </div>
    `;

    const radios = container.querySelectorAll('input[name="filtro"]');
    const inputValor = container.querySelector('#inputValor');
    const btnBuscar = container.querySelector('#btnBuscar');
    const chkLimpiar = container.querySelector('#chkLimpiar');

    radios.forEach(radio =>{
        radio.addEventListener('change',()=>{
            inputValor.disabled = false;
            switch(radio.value){
                case 'id':inputValor.type = 'number';break;
                case 'nombre':inputValor.type = 'text';break;
                case 'fecha':inputValor.type = 'date';break;
            }
            inputValor.value = '';
        });
    });

    btnBuscar.addEventListener('click',()=>{
        const seleccionado = container.querySelector('input[name="filtro"]:checked');
        if(!seleccionado) 
            return;
        const valor = inputValor.value;
        let resultados  =data;
        switch(seleccionado.value){
            case 'id': 
                resultados = buscarPorId(data,parseInt(valor));
                break;
            case 'nombre': 
                resultados = buscarPorNombre(data,valor);
                break;
            case 'fecha': 
                resultados = buscarPorFecha(data,valor);
                break;
        }
        inicializarTabla('videogames-table',resultados);
    });

    chkLimpiar.addEventListener('change',()=>{
        if(chkLimpiar.checked){
            inicializarTabla('videogames-table',data);
            chkLimpiar.checked = false;
            inputValor.value = '';
            radios.forEach(r=>r.checked = false);
            inputValor.disabled = true;
        }
    });
};