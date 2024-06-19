const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const year = document.querySelector('.year')
const container = document.querySelector('.container')
const loader = document.querySelector('.loader')

function countdown () {
    const currentYear = new Date().getFullYear()
    // Jan 1
    const newYear = new Date(currentYear + 1, 0, 1)

    const currentTime = Date.now()
    // milliseconds
    const timeDiff = newYear - currentTime
    const day = Math.floor(timeDiff / 1000 / 60 / 60 / 24)
    const hour = Math.floor(timeDiff / 1000 / 60 / 60) % 24
    const minute = Math.floor(timeDiff / 1000 / 60) % 60
    const second = Math.floor(timeDiff / 1000) % 60

    days.textContent = day >= 10 ? day : `0${day}`
    hours.textContent = hour >= 10 ? hour : `0${hour}`
    minutes.textContent = minute >= 10 ? minute : `0${minute}`
    seconds.textContent = second >= 10 ? second : `0${second}`

    // background
    year.textContent = currentYear + 1
}

function init() {
    setTimeout(() => {
        loader.classList.add('hidden')
        year.classList.remove('hidden')
        container.style.display = 'flex'
    }, 1000)

    setInterval(countdown, 1000)
}

init()


