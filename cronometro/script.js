let sec = 0
let min = 00
let hr = 0
let interval;

function start() {
    watch() // para assim que apertar no start começar a rodar e não ter q esperar o 1 sec para começar
    interval = setInterval(watch, 1000)
}

function restart() {
    sec = 0
    min = 0
    hr = 0
    document.getElementById('watch').innerHTML = "00:00:00"
}

function pause() {
    clearInterval(interval)
}

function toTwoDigits(digit) {
    if (digit < 10) {
        return `0${digit}`
    } else {
        return digit
    }
}

function watch() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if (min == 60) {
            hr++
            min = 0
        }
    }
    document.getElementById('watch').innerHTML = `${toTwoDigits(hr)}:${toTwoDigits(min)}:${toTwoDigits(sec)}`
}