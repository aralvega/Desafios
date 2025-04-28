import { esPrimo } from "../services/evaluacionPrimoService.js";

export const inicializarFormulario = ()=>{
    const txtNumero = document.getElementById('txtNumero');
    const btnValidarNumero = document.getElementById('btnValidarPrimo');
    const parrafoResultado = document.getElementById('resultado');

    btnValidarNumero.addEventListener('click',()=>{
        const numeroIngresado = parseInt(txtNumero.value);  
        
        if(isNaN(numeroIngresado)){
            parrafoResultado.textContent = 'Ingrese un número válido';
            return;
        }
        const resultadoEvaluacion = esPrimo(numeroIngresado);
        parrafoResultado.textContent = resultadoEvaluacion  ? `${numeroIngresado} es primo`:
                                        `${numeroIngresado} no es primo`;
    })
}

