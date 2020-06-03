const port = 3000
const express = require('express')
const app = express()
const db = require('./database')

app.use(express.json())

app.get('/grades/:id', (req, res, next) => {
    res.send(db.getGrade(req.params.id))
})

app.get('/grades', (req, res, next) => {
    res.send(db.getGrades())
})

app.get('/totalGrade', (req, res, next) => {
    //deve passar student e subject
    const params = req.body
    res.send(db.totalGrade(params))
})

app.get('/calculatorAverage', (req, res, next) => {
    //Deve passar subject type
    const params = req.body
    res.send(db.calculatorAverage(params))
})

app.get('/bestGrades', (req,res,next) => {
    //deve passar subject e type
    const params = req.body
    res.send(db.bestGrades(params))
})

app.post('/createGrade', (req, res, next) => {
    const grade = db.createGrade({
        student: req.body.student,
        subject: req.body.subject,
        type: req.body.type,
        value: parseInt(req.body.value),
        timestamp: new Date()
    })
    res.send(grade)
})

app.put('/updateGrade', (req, res, next) => {
    const grade = db.updateGrade({
        id: parseInt(req.body.id),
        student: req.body.student,
        subject: req.body.subject,
        type: req.body.type,
        value: parseInt(req.body.value),
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