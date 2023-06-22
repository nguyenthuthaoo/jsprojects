const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


$('.btn').addEventListener('click', palinedrome)

function palinedrome() {
    const word = $('.input-text').value
    const start = word.substring(0, Math.floor(word.length / 2)).toLowerCase()
    const end = word.substring(word.length - Math.floor(word.length / 2)).toLowerCase()
    const flit = [...end].reverse().join('')
    // const flit = end.split(' ').reverse().join(' ')
    // split() dùng để convert string thành array, sau đó dùng reverse()
    // để reverse mảng array-> dùng join để nối chuỗi 
    
    if(start === flit) {
        $('.result').innerText = `${word.toUpperCase()} is a palindrome`
    } else {
        $('.result').innerText = `${word.toUpperCase()} is not a palindrome`
    }
}