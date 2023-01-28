const tela = document.getElementById('screen');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let primeiroDigito = true;
let operador;
let numeroDigitado;

let operacaoPendente = operador == undefined;

//01 - numeros 
const inserirNumero = (e) => {
    if (primeiroDigito) {
        tela.innerHTML = e.target.textContent;
        primeiroDigito = false
    }else{
        tela.innerHTML += e.target.textContent;
    }
}
numeros.forEach((e)=> e.addEventListener('click', f1))

//03 - calcular
const calcular= ()=>{
    if(operador == '+'){
        tela.textContent = numeroDigitado + parseFloat(tela.textContent);
        operador=undefined
    }else if(operador == '-'){
        tela.textContent = numeroDigitado - parseFloat(tela.textContent);
        operador=undefined
    }else if(operador == '*'){
        tela.textContent = numeroDigitado * parseFloat(tela.textContent);
        operador=undefined
    }else if(operador == '/'){
        tela.textContent = numeroDigitado / parseFloat(tela.textContent);
        operador=undefined
    }
}

//02 - operador
const inserirOperador = (e) =>{
    calcular()
    numeroDigitado = parseFloat(tela.textContent);
    operador = e.target.textContent;
    primeiroDigito = true
};
operadores.forEach((e) => e.addEventListener('click', f2))

// Apagar um digito 
const apagar = () =>{
    tela.innerHTML = tela.innerHTML.slice(0, -1);
}
document.querySelector('#apaga').addEventListener('click', apagar);

//limpar os dados
const limpar = () =>{
    tela.innerHTML = ''
    operador = undefined
    numeroDigitado = 0;
}
document.querySelector('#limpar').addEventListener('click', limpar);

//botão mostrar o resultado 
const resultado = () =>{
    calcular()
}
document.querySelector('#resultado').addEventListener('click', resultado)