const form = document.querySelector('form')
const username = document.querySelector('#user-name')
const email = document.querySelector('#user-email')
const password = document.querySelector('#user-password')
const passwordConfirm = document.querySelector('#user-password-confirm')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkLength(username, 3, 15)
    confirmEmail(email)
    checkLength(password, 6, 25)
    confirmPasswordMatch(password, passwordConfirm)
})

function checkLength(input, min, max) {
    if (input.value.trim().length > max || input.value.trim().length < min) {
        const column = input.parentElement.querySelector('label').innerText.trim()
        showError(input, `${column} must be between ${min} - ${max} characters`)
        console.log(input, max, min)
    } else {
        showSuccess(input)
    }
}

function showError(input, msg) {
    const formGroup = input.parentElement
    const Error = formGroup.querySelector("small")
    // add red border hint
    input.classList.remove('valid')
    input.classList.add('invalid')
    // show error msg
    Error.innerText = msg
    Error.classList.add('invalid')
}

function showSuccess(input) {
    const formGroup = input.parentElement
    const Error = formGroup.querySelector("small")
    // add green border hint
    input.classList.remove('invalid')
    input.classList.add('valid')
    // hide error msg
    Error.classList.remove('invalid')
}

function confirmEmail(input) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(input.value)) {
        showError(input, `It is a not valid email address.`);
    } else {
        showSuccess(input)
    }
}

function confirmPasswordMatch(input, input2) {
    if (input.value !== input2.value) {
        showError(input2, `Passwords do not match.`)
    } else {
        showSuccess(input2)
    }
}