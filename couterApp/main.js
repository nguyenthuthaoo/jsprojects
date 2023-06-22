const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
let value =0;
$('.button-wrap').addEventListener('click', (e) => {

    if(e.target.classList.contains('btn-subtract')) {
        value -=1;
        $('.count').innerText = value;
        // $('.count').innerHTML--;
        changeColor() 
    }
    else if(e.target.classList.contains('btn-add')) {
        value +=1;
        $('.count').textContent = value;
        // $('.count').innerHTML++;
        changeColor()
    }
    else if(e.target.classList.contains('btn-reset')) {
        value = 0;
        $('.count').textContent = value;
        // $('.count').innerHTML = 0;
        changeColor()
    }
})
// $('.btn-subtract').addEventListener('click', () => {
//     $('.count').innerHTML--;
//     changeColor()
// })

// $('.btn-reset').addEventListener('click', () => {
//     $('.count').innerHTML = 0;
//     changeColor()
// })

// $('.btn-add').addEventListener('click', () => {
//     $('.count').innerHTML++;
//     changeColor()
// })

function changeColor() {
    if($('.count').innerText < 0) {
        $('.count').style.color ="#ff4500"
    }
    else if($('.count').innerText > 0)   {
        $('.count').style.color ="#ffff00"
        
    }
    else {
        $('.count').style.color ="#fff"
    }
}