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
    const formGroup = input.parentElement
    const ErrorMessage = formGroup.querySelector('small')
    if (input.value.trim().length > max || input.value.trim().length < min) {
        ErrorMessage.text = `${input.id} should be between ${min} and ${max}`
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
}