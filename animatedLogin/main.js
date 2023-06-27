const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
console.log($('.form-container'))

$('.forgot-link').addEventListener('click', () => {
    $('.login').style.display = 'none'
    $('.reset-password').style.display = 'flex'
})

$('.register-link').addEventListener('click', () => {
    $('.login').style.display = 'none'
    $('.register').style.display = 'flex'
})

$('.login-link').addEventListener('click', () => {
    $('.register').style.display = 'none'
    $('.login').style.display = 'flex'
})

$('.close').addEventListener('click', () => {
    $('.reset-password').style.display = 'none'
    $('.login').style.display = 'flex'
})