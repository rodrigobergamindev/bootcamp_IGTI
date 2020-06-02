const port = 3000
const express = require('express')
const app = express()
const db = require('./database')


app.get('/grades/:id', (req, res, next) => {
    res.send(db.getGrade(req.params.id))
})

app.get('/grades', (req, res, next) => {
    res.send(db.getGrades())
})

<<<<<<< HEAD
app.get('/totalGrades/:student/:subject', (req, res, next) => {
    const student = req.params.student
    const subject = req.params.subject
    res.send(db.totalGrade(student, subject))
})

app.get('/calculatorAverage/:subject/:type', (req, res, next) => {
    const subject = req.params.subject
    const type = req.params.type
    res.send(db.calculatorAverage(subject, type))
})

app.get('/bestGrades/:subject/:type', (req,res,next) => {
    const subject = req.params.subject
    const type = req.params.type
    res.send(db.bestGrades(subject, type))
})

=======
>>>>>>> eb8193b6c936a04530c408a8d9523dc000577cc8
app.post('/grades/:student/:subject/:type/:value', (req, res, next) => {
    const grade = db.createGrade({
        student: req.params.student,
        subject: req.params.subject,
        type: req.params.type,
<<<<<<< HEAD
        value: parseInt(req.params.value),
=======
        value: req.params.value,
>>>>>>> eb8193b6c936a04530c408a8d9523dc000577cc8
        timestamp: new Date()
    })
    res.send(grade)
})

app.put('/grades/:id/:student/:subject/:type/:value', (req, res, next) => {
    const grade = db.updateGrade({
        id: parseInt(req.params.id),
        student: req.params.student,
        subject: req.params.subject,
        type: req.params.type,
        value: req.params.value,
        timestamp: new Date()
    })
    res.send(grade)
})

app.delete('/grades/:id',(req, res, next) => {
    const grade = db.deleteGrade(req.params.id)
    res.send(grade)
}) 


app.listen(port, () => { 
    console.log(`Servidor está executando na porta ${port}`)
})