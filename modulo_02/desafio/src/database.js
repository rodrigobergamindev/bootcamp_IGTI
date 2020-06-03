const grades_control = require('./grades.json')
const fs = require('fs')


const sequence = {
    _id:grades_control.nextId,
    get id() {
        return this._id++
    }
}



// let myGrades = (grades.grades).map(grades => grades)

const grades = grades_control.grades

/*
const myObj = {
    id: sequence.id,
    student: "Rodrigo Bergamin",
    subject: "03 - React",
    type: "Desafio",
    value: 40,
    timestamp: new Date()
}
grades_control.nextId = sequence.id
grades.push(myObj)

console.log(grades_control)
*/


function createGrade(grade) {
    if(!grade.id) grade.id = sequence.id
    grades.push(grade)
    grades_control.nextId = sequence.id
    fs.writeFile('./grades.json', JSON.stringify(grades_control), err =>  console.log(err))

    return grade
}

function getGrade(id) {
    return grades[id - 1] || {}
}

function getGrades() {
    return grades_control
}

function updateGrade(grade) {

    function myGrade(element){
        return element.id === grade.id
    }

    const oldGrade = grades.find(myGrade)
    const element = grades.indexOf(oldGrade)
    grades.splice(element, 1, grade)
    fs.writeFile('./grades.json', JSON.stringify(grades_control), err =>  console.log(err))

    return grades[id]
}

function deleteGrade(id) {
    
    function myGrade(element){
        return element.id === id
    }

    const oldGrade = grades.find(myGrade)
    const element = grades.indexOf(oldGrade)
    grades.splice(element, 1)
    fs.writeFile('./grades.json', JSON.stringify(grades_control), err =>  console.log(err))
    
    return grades_control
}

function totalGrade(params) {
    const data = params
    const student = data.student
    const subject = data.subject

    const myGrades = grades.filter(grade => {
        if(grade.student === student && grade.subject === subject) {
            return grade
        }
    })
    
    
    const sumGrades = myGrades.reduce((accumulator, current) => {
        return (accumulator + current.value)
    }, 0 )
    
    return `A soma total das notas de ${student} na matéria ${subject} é de ${sumGrades}`
    
}

function calculatorAverage(params) { 
    const data = params
    const type = data.type
    const subject = data.subject

    const myGrades = grades.filter(grade => {
        if(grade.subject === subject && grade.type === type) {
            return grade
        }
    })

    let average = myGrades.reduce((accumulator, current) => {
        return (accumulator + current.value)
    }, 0 ) 

    average = average / myGrades.length
    return `A média de notas para ${subject} em ${type} é ${average}`

}

function bestGrades(params) { 
    const data = params
    const type = data.type
    const subject = data.subject
    
    const myGrades = grades.filter(grade => {
        if(grade.subject === subject && grade.type === type) {
            return grade
        }
    })

    const gradesSorted = myGrades.sort((a,b) => { 
        return (b.value - a.value)
    })

    let bestGrades = []
    for (let index = 0; index < 3; index++) {
        const element = gradesSorted[index];
        bestGrades.push(element)
    }

    return bestGrades.sort()
}

module.exports = { createGrade, getGrade, getGrades, updateGrade, deleteGrade, totalGrade, calculatorAverage, bestGrades}
