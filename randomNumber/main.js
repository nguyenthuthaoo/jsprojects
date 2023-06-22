const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



$('.btn').addEventListener('click', () => { 
    var randomColor = Math.random().toString(16).substring(2, 8)
    $('.color-random').innerText = "#" + randomColor
    $('body').style.backgroundColor = "#" + randomColor
})

// khi muốn random color có các cách viết sau
// 1. randomColor = Math.floor(Math.random()*16777215).toString(16)
// 2. randomcolor = Math.random().toString(16).substring(2, 8)