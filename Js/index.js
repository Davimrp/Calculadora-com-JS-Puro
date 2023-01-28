const display = document.getElementById('screen')
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')
const limparDisplay = document.querySelector('#limpar')
const Apagar = document.querySelector('#apaga')
const resultado = document.querySelector('#resultado')

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => {
    operador !== undefined;
}

const calculo = () => {
    calcular()
    novoNumero = true;
    operador = undefined
}

const calcular = () => {
    if(!operacaoPendente()){
        const numAtual = parseFloat(display.textContent);
        novoNumero = true
        console.log(novoNumero)
        if(operador == '+'){
            atualizarDisplay(numeroAnterior + numAtual);
            console.log(numAtual)
        }else if(operador == '-'){
            atualizarDisplay(numeroAnterior - numAtual);
        }else if(operador == '*'){
            atualizarDisplay(numeroAnterior * numAtual);
        }else if(operador == '/'){
            atualizarDisplay(numeroAnterior / numAtual);
        }
    }
}

const atualizarDisplay = (texto) => {
    if(novoNumero){
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
}
const selecionarOperador = (evento) =>{
    if(!novoNumero){
        calcular()
        novoNumero = true
        operador = evento.target.textContent;
        numeroAnterior = parseFloat( display.textContent)
        console.log(operador)
    }
}
function limparDigitos(){
    display.textContent = ''
    operador = undefined;
    numeroAnterior = 0;
}
function ApagarDigito(){
    
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

const apagarUltimo = () =>{
    display.textContent = display.textContent.slice(0, -1)
}
Apagar.addEventListener('click', apagarUltimo)

/*----------------------------------Eventos----------------------------------*/
numeros.forEach((numero)=> numero.addEventListener('click', inserirNumero));
operadores.forEach((operador)=> operador.addEventListener('click', selecionarOperador));
limparDisplay.addEventListener('click', limparDigitos);
Apagar.addEventListener('click', ApagarDigito)
resultado.addEventListener('click', calculo)




































// // console.log()

// const display = document.querySelector('#screen')
// const numeros = document.querySelectorAll('[id*=tecla]')
// const operadores = document.querySelectorAll('[id*=operador]')
// const limparDisplay = document.querySelector('#limpar')
// let numeroDigitado;
// let operadorDigitado;

// const inserirNumero = (numero) =>{
//     numeroDigitado = numero.target.textContent;
//     display.value += numeroDigitado;
//     console.log(numeroDigitado)
// }
// const inserirOperador = (operador) =>{
//     operadorDigitado = operador.target.textContent;
//     display.value += operadorDigitado;
//     console.log(operadorDigitado)
// }

// function limparDigitos(){
//     display.value = ''
// }


// numeros.forEach((numero)=>{
//     numero.addEventListener('click', inserirNumero);
// });

// operadores.forEach((operador)=>{
//     operador.addEventListener('click', inserirOperador);
// });
// limparDisplay.addEventListener('click', limparDigitos)
