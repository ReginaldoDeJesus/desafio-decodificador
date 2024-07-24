let botaoCriptografar = document.getElementById("botao-criptografar");
let botaoDescriptografar = document.getElementById("botao-descriptografar");
let botaoCopiar = document.getElementById("botao-copiar");
let divBotaoCopiar = document.querySelector(".botao-copiar");
let textArea = document.getElementById("texto-de-entrada");
let divDoResultado = document.querySelector(".resultado-texto");
let divInicial = document.querySelector(".texto-inicial-resultado");
let quadroResultado = document.getElementById("resultado-final");
let aviso = document.querySelector(".aviso");
let isTextAreaClicked = false;
let texto = "";
let textoCriptografadoFinal = "";
let textoDescriptografadoFinal = "";

function limparTextArea(textAreaQualquer) {
    textAreaQualquer.value = "";
}
//
function validar(texto) {
    let pattern = /[A-Z]+|Ç+|[ÁáÉéÍíÓóÚúÀàÈèÌìÒòÙù\`\´ÃãÕõ\~ÂâÊêÎîÔôÛû\^]+/g;
    return !(pattern.test(texto));
}

function criptografar(textoNormalQualquer) {
    let textoCriptografado = "";
    for (let i = 0; i < textoNormalQualquer.length; i++) {
        let letra = textoNormalQualquer.charAt(i);
        switch (letra) {
            case "a":
                textoCriptografado += "ai";
                break;
            case "e":
                textoCriptografado += "enter";
                break;
            case "i":
                textoCriptografado += "imes";
                break;
            case "o":
                textoCriptografado += "ober";
                break;
            case "u":
                textoCriptografado += "ufat";
                break;
            default:
                textoCriptografado += textoNormalQualquer.charAt(i);
        }
    }
    return textoCriptografado;
}

function descriptografar(textoCriptografadoQualquer) {
    let textoDescriptografado = textoCriptografadoQualquer.replaceAll("ai", "a");
    textoDescriptografado = textoDescriptografado.replaceAll("enter", "e");
    textoDescriptografado = textoDescriptografado.replaceAll("imes", "i");
    textoDescriptografado = textoDescriptografado.replaceAll("ober", "o");
    textoDescriptografado = textoDescriptografado.replaceAll("ufat", "u");

    return textoDescriptografado;
}

function renderizarNoQuadroResultado(textoCriptografadoQualquer, quadroResultado) {
    divInicial.style.display = "none";
    divDoResultado.style.display = "flex";
    divBotaoCopiar.style.display = "flex";
    quadroResultado.innerHTML = textoCriptografadoQualquer;
    textArea.value = "Digite seu texto aqui...";
    isTextAreaClicked = false;
}

function copiarConteudo(texto) {
    navigator.clipboard.writeText(texto)
        .then()
        .catch(err => {
            console.error(`Error ao copiar texto para o clipboard: ${err}`)
        })
}

textArea.addEventListener("click", function () {
    if (!isTextAreaClicked) {
        limparTextArea(textArea);
        isTextAreaClicked = true;
    }
});

botaoCriptografar.addEventListener("click", function () {
    texto = textArea.value;
    if (validar(texto)) {
        textoCriptografadoFinal = criptografar(texto);
        renderizarNoQuadroResultado(textoCriptografadoFinal, quadroResultado);
        aviso.style.color = "#0A3871";
        aviso.style.fontSize = "12px";

    } else {
        textArea.value = "";
        aviso.style.color = "red";
        aviso.style.fontSize = "18px";
    }

});

/**Falta criar os eventoListeners para os botões 'Descriptografar' e 'copiar'*/
botaoDescriptografar.addEventListener("click", function () {
    texto = textArea.value;
    if (validar(texto)) {
        textoDescriptografadoFinal = descriptografar(texto);
        renderizarNoQuadroResultado(textoDescriptografadoFinal, quadroResultado);
        aviso.style.color = "#0A3871";
        aviso.style.fontSize = "12px";
    } else {
        textArea.value="";
        aviso.style.color = "red";
        aviso.style.fontSize = "18px";
    }


});

botaoCopiar.addEventListener("click", function () {
    let text = quadroResultado.innerHTML;
    copiarConteudo(text);
    quadroResultado.innerHTML = "";
});
