let botaoCriptografar = document.getElementById("botao-criptografar");
let botaoDescriptografar = document.getElementById("botao-descriptografar");
let divBotaoCopiar = document.querySelector(".botao-copiar");
let textArea = document.getElementById("texto-de-entrada");
let divDoResultado = document.querySelector(".resultado-texto");
let divInicial = document.querySelector(".texto-inicial-resultado");
let quadroResultado = document.getElementById("resultado-final");
let isTextAreaClicked = false;
let textoNormal = "";
let textoCriptografado = "";

function limparTextArea(textAreaQualquer){
    textAreaQualquer.value = "";
}
/**Falta implementar a função Criptografar */
function criptografar(textoNormalQualquer){
    return textoNormalQualquer
}

/**Falta implementar a função Descriptografar */
function descriptografar(textoCriptografadoQualquer){
    return textoCriptografadoQualquer
}

function renderizarNoQuadroResultado(textoCriptografadoQualquer, quadroResultado){
    divInicial.style.display = "none";
    divDoResultado.style.display = "block";
    divBotaoCopiar.style.display = "block"; 
    quadroResultado.innerHTML = textoCriptografadoQualquer;
}

textArea.addEventListener("click", function(){
    if(!isTextAreaClicked){
        limparTextArea(textArea);
        isTextAreaClicked = true;
    }   
});

botaoCriptografar.addEventListener("click", function(){
    textoNormal = textArea.value;
    textoCriptografado = criptografar(textoNormal);
    renderizarNoQuadroResultado(textoCriptografado,quadroResultado);
});

/**Falta criar os eventoListeners para os botões 'Descriptografar' e 'copiar'*/
