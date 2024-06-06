const form = document.querySelector('form')
const username = document.querySelector('#user-name')
const email = document.querySelector('#user-email')
const password = document.querySelector('#user-password')
const passwordConfirm = document.querySelector('#user-password-confirm')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
})

function checkLength (input, min, max) {
    if (input.value.trim().length > max || input.value.trim().length < min) {
        const column = input.parentElement.querySelector('label').innerText.trim()
        showError(input, `${column} must be between ${min} - ${max} characters`)
    } else {
        showSuccess (input)
    }
}

function showError (input, msg) {
    const formGroup = input.parentElement
    const Error = formGroup.querySelector("small");
    // add red border
    input.classList.remove('valid')
    input.classList.add('invalid')
    // show error msg
    Error.innerText = msg
    Error.classList.add('invalid')
}

function showSuccess (input) {
    const formGroup = input.parentElement
    const Error = formGroup.querySelector("small");
    // add green border
    input.classList.remove('invalid')
    input.classList.add('valid')
    // hide error msg
    Error.classList.remove('invalid')
}