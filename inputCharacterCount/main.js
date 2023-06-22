const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

$('.input-text').addEventListener('keyup', countCharacter)

function countCharacter() {
    const inputText = $('.input-text').value.length 
    $('.count').innerText = inputText
}



