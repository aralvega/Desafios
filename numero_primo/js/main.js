import { esPrimo } from "./evaluacion_primo.js";

const txtNumero = document.getElementById('txtNumero');
const btnValidarNumero = document.getElementById('btnValidarPrimo');
const parrafoResultado = document.getElementById('resultado');

btnValidarNumero.addEventListener('click',()=>{
    const numeroIngresado = parseInt(txtNumero.value);  
    const resultadoEvaluacion = esPrimo(numeroIngresado);
    
    parrafoResultado.textContent = resultadoEvaluacion  ? `${numeroIngresado} es primo`:
                                    `${numeroIngresado} no es primo`;
})