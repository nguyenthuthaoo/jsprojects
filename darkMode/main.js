const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let darkMode = localStorage.getItem('darkMode')

// set dark mode
const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    $('.text-mode').textContent = 'Light'
    localStorage.setItem('darkMode','enabled')
}

// disable dark mode
const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    $('.text-mode').textContent = 'Dark'
    localStorage.setItem('darkMode',null)
}

// save Dark Mode history
if(darkMode === 'enabled') {
    enableDarkMode()
}

// add Event listeners
$('.toogle-darkmode').addEventListener('click',() => {
    let darkMode = localStorage.getItem('darkMode')

    if(darkMode !== 'enabled') {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})




