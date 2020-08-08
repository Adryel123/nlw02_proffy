const proffys = [
    {
        name: "Adryel",
        avatar: "https://avatars0.githubusercontent.com/u/16639397?s=400&u=797c95346e90f39db72f6a1d83b26ac5c6b83e42&v=4",
        whatsapp: 2499999999,
        bio: "O cara",
        subject: "Matemática",
        cost: "100,00",
        weekday: "saturday",
        time_from: "",
        time_to: "",
    },
    {
        name: "Adryel",
        avatar: "https://avatars0.githubusercontent.com/u/16639397?s=400&u=797c95346e90f39db72f6a1d83b26ac5c6b83e42&v=4",
        whatsapp: 2499999999,
        bio: "O das virgens",
        subject: "Matemática",
        cost: "100,00",
        weekday: "saturday",
        time_from: "",
        time_to: "",
    }
]

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

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('./src/views', {
    express: server,
    noCache: true,
})

function getSubject(subjectNumber) {
    return subjects[subjectNumber - 1]
}

function pageLanding(req, res) {
    return res.render('index.html')
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render('study.html', { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    if (Object.keys(data).length == 0)
        return res.render('give-classes.html', { weekdays, subjects })

    data.subject = getSubject(data.subject)
    proffys.unshift(data)

    return res.redirect('/study')
}

server.use(express.static('public'))

server.get('/', pageLanding)
server.get('/study', pageStudy)
server.get('/give-classes', pageGiveClasses)

server.listen(5500)