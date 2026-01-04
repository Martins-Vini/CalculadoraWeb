//Usando a lógica de delegação de eventos

let display = document.querySelector("#display");
let botoes = document.querySelector(".container-botoes");

function logica(e){
    const alvo = e.target.closest("button");
    if(!alvo){
        return;
    }

    const valor = alvo.innerText;

    if (valor === 'C') {
        limpar();
    } else if (valor === '=') {
        calcular(e);
    } else if (valor === '<') {
        apagarUltimo();
    } else {
        addDisplay(valor);
    }
}

function calcular(valor){
    try{
        display.value = math.evaluate(display.value);
    } catch{
        display.value = "Error"
        setTimeout(limpar, 2000)
    }
}

function limpar(){
    display.value = ` `
}

function apagarUltimo(){
    //Apagar último do array
    display.value = display.value.slice(0, -1);
}

function addDisplay(valor){
    display.value += valor;
}

botoes.addEventListener('click', logica);