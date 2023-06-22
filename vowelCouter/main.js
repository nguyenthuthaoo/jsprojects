const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


$('.btn').addEventListener('click', palinedrome)

function palinedrome() {
    const words = $('.input-text').value.toLowerCase()
    let wordCouter = 0
    for(let i = 0; i < words.length; i++) {
        let letter = words[i].trim()
        if(letter.match(/([a, e, i, u, o])/)) {
            wordCouter++
        }
    }
    $('.result').innerText = `${words.toUpperCase()} has ${wordCouter} wowels`
}