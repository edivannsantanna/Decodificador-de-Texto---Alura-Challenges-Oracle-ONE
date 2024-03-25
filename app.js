let chaves = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat'
};

let chavesInversas = {
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u'
};

function ajustarAlturaTextarea() {
    let textarea = document.querySelector('.input-group__text-area');
    textarea.style.height = '48px';
    textarea.style.height = `${textarea.scrollHeight}px`;
};

function transformarConteudo(objeto) {
    let textarea = document.querySelector('.input-group__text-area');
    let conteudo = textarea.value;
            for (let chave in objeto) {
                let expressaoRegular = new RegExp(chave, 'g');
                conteudo = conteudo.replace(expressaoRegular, objeto[chave]);
            };
    let mensagem = document.querySelector('.mensagem');
    mensagem.value = conteudo;
};

function criptografar() {
    transformarConteudo(chaves);
    document.querySelector('.output-group__retangulo__copiar-mensagem').style.display = "flex";
    document.querySelector('#imagem-ilustracao').style.display = "none";
    document.querySelector('.output-group__retangulo__guia').style.display = "none";
};

function copiando() {
    let textoParaCopiar = document.querySelector('.mensagem').value;
    navigator.clipboard.writeText(textoParaCopiar)

    let alerta = document.createElement('div');
    alerta.style.backgroundColor = "rgba(206, 212, 218, 0.25)";
    alerta.style.color = "#495057";
    alerta.style.padding = "16px";
    alerta.style.borderRadius = "16px";
    alerta.style.position = "fixed";
    alerta.style.top = "80px";
    alerta.style.left = "50%";
    alerta.style.transform = "translate(-50%, -50%)";
    alerta.style.zIndex = "9999";

    alerta.textContent = "Copiado";
    document.body.appendChild(alerta);
    
    function removerAlerta() {
        document.body.removeChild(alerta);
    }
    setTimeout(removerAlerta, 1000);
};

function descriptografar() {
    transformarConteudo(chavesInversas);
};