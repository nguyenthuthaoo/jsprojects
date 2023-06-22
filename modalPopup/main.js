const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



$('.btn').addEventListener('click',openPopup)

$('.popup').addEventListener('click', (e) => {
    if(e.target.classList.contains('close')) {
        closePopup()
    }
})

$('.popup').addEventListener('click',closePopup)

function openPopup() {
    $('.popup').style.display = 'block';
}

function closePopup() {
    $('.popup').style.display = 'none';
}