const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    return subjects[subjectNumber - 1]
}

function convertHoursToMinutes(hours) {
    const [h, m] = hours.split(":")
    return Number(60 * Number(h) + Number(m))
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}