const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

$('.calculate').addEventListener('click', calculateBill)

function calculateBill(e) {
    e.preventDefault()
    const valueBill = Number($('#bill').value)
    const valueService = Number($('#service-name').value)

    if($('#bill').value === '' || $('#service-name').value === '') {
        $('.error-msg').style.display = 'block'
        hideError ()
    } 
    else if (isNaN($('#bill').value)) {
        $('.error-msg').innerText = 'Please enter a number'
        $('.error-msg').style.display = 'block'
    }
    else {
        const tip = Math.ceil(valueBill*valueService)
        const total = valueBill + tip
        $('.tip-count').innerText = `${tip} $`
        $('.total-amount').innerText = `${total} $`
    }
}

function hideError () {
    setTimeout(() => {
        $('.error-msg').style.display = 'none'
    }, 5000)
}



