// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

const contato = document.querySelector('[data-menu-lista-contato]');
console.log(contato);
// contato.addEventListener('click', ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo'));

const download = document.querySelector('[data-menu-lista-download]');
console.log(download);
// download.addEventListener('click', ga('send', 'event', 'menu', 'download_pdf', 'download_pdf'));

const cardLorem = document.querySelector('[data-cards-lorem]');
console.log(cardLorem);
// cardLorem.addEventListener('click', ga('send', 'event', 'analise', 'ver_mais', 'Lorem'));

const cardIpsum = document.querySelector('[data-cards-ipsum]');
console.log(cardIpsum);
// cardIpsum.addEventListener('click', ga('send', 'event', 'analise', 'ver_mais', 'Ipsum'));

const cardDolor = document.querySelector('[data-cards-dolor]');
console.log(cardDolor);
// cardDolor.addEventListener('click', ga('send', 'event', 'analise', 'ver_mais', 'Dolor'));

const inputName = document.querySelector('[data-form-input-nome]');
// inputName.addEventListener('input', ga('send', 'event', 'contato', 'nome', 'preencheu'));

const inputEmail = document.querySelector('[data-form-input-email]');
// inputEmail.addEventListener('input', ga('send', 'event', 'contato', 'email', 'preencheu'));

const inputTel = document.querySelector('[data-form-input-tel]');
// inputTel.addEventListener('input', ga('send', 'event', 'contato', 'telefone', 'preencheu'));

const botao = document.querySelector('[data-form-button-submit]');
// botao.addEventListener('input', ga('send', 'event', 'contato', 'enviado', 'enviado'));

const submit = document.getElementsByClassName('lightbox-content');
console.log(submit);