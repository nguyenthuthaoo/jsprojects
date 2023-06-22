const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const copyContent = async() => {
    const text = $('.input-text').value
    try {
        $('.input-text').select()
        await navigator.clipboard.writeText(text)
        $('.btn').innerText = 'Copied!!'
        $('.input-text').onkeyup = () => {
            $('.btn').innerText = 'Copy'
            console.log('text')
        }
    }
    catch (err) {
        console.error('failed to copy', err)
    }
}

$('.btn').addEventListener('click', copyContent)



