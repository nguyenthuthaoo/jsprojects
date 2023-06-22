const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

$('.btn').addEventListener('click', () => {
     
    $('.number-random').innerText = getRandomIntInclusive(1, 10)
})


function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }