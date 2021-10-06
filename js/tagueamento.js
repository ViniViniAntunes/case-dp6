// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Implementando a função que carrega o pixel do Google Analytics
function carregaTagGA() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://www.google-analytics.com/analytics.js';

    var tagScript = document.getElementsByTagName('script')[0];
    tagScript.parentNode.insertBefore(ga, tagScript);
};
// Carregando o pixel do Googla Analytics
carregaTagGA();

// Implementando a função que inicializa o Google Analytics
function inicializaGA() {
    window.ga = window.ga || function () {
        (ga.q = ga.q || []).push(arguments)
    };

    ga.l = +new Date;
    ga('create', 'UA-12345-6', 'auto');
};
// Inicializando o Google Analytics
inicializaGA();

// Pegando o caminho da página atual
let pagina = location.pathname;


// Implementando a função que conta um pageview
function pageView(path) {
    ga('send', 'pageview', path);
};
// Contando um pageview
pageView(pagina);

// Implementando a função que envia evento
function enviaEvento(categoria, acao, rotulo) {
    window.ga('send', 'event', categoria, acao, rotulo);
};


// Click no link "Entre em contato"
const contato = document.querySelector('[data-menu-lista-contato]');
// console.log(contato);
contato.addEventListener('click', function () {
    enviaEvento('menu', 'entre_em_contato', 'link_externo');
});


// Click no link "Download PDF"
const download = document.querySelector('[data-menu-lista-download]');
// console.log(download);
download.addEventListener('click', function () {
    enviaEvento('menu', 'download_pdf', 'download_pdf');
});


// Se a página for a "analise.html":
if (pagina.search('analise.html') > -1) {

    // Click no card "Lorem"
    const cardLorem = document.querySelector('[data-cards-lorem]');
    // console.log(cardLorem);
    cardLorem.addEventListener('click', function () {
        enviaEvento('analise', 'ver_mais', 'Lorem');
    });

    // Click no card "Ipsum"
    const cardIpsum = document.querySelector('[data-cards-ipsum]');
    // console.log(cardIpsum);
    cardIpsum.addEventListener('click', function () {
        enviaEvento('analise', 'ver_mais', 'Ipsum');
    });


    // Click no card "Dolor"
    const cardDolor = document.querySelector('[data-cards-dolor]');
    // console.log(cardDolor);
    cardDolor.addEventListener('click', function () {
        enviaEvento('analise', 'ver_mais', 'Dolor');
    });

    // Se a página for a "sobre.html":
} else if (pagina.search('sobre.html') > -1) {

    // Preencheu o campo "NOME"
    const inputName = document.querySelector('[data-form-input-nome]');
    // console.log(inputName);
    inputName.addEventListener('change', function () {
        enviaEvento('contato', 'nome', 'preencheu');
    });

    // Preencheu o campo "E-MAIL"
    const inputEmail = document.querySelector('[data-form-input-email]');
    // console.log(inputEmail);
    inputEmail.addEventListener('change', function () {
        enviaEvento('contato', 'email', 'preencheu');
    });


    // Preencheu o campo "TELEFONE"
    const inputTel = document.querySelector('[data-form-input-tel]');
    // console.log(inputTel);
    inputTel.addEventListener('change', function () {
        enviaEvento('contato', 'telefone', 'preencheu');
    });


    // Clicou no box "ACEITO QUE ENTRE EM CONTATO"
    const checkBoxAceito = document.querySelector('[data-form-input-aceito]');
    // console.log(checkBoxAceito);
    checkBoxAceito.addEventListener('change', function () {
        enviaEvento('contato', 'aceito', 'preencheu');
    });


    // Submeteu o formulário
    const submit = jQuery('[data-form-button-submit]');
    // console.log(submit);
    submit.on('click', function () {
        enviaEvento('contato', 'enviado', 'enviado');
    });
}