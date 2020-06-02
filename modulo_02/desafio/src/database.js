const grades_control = require('./grades.json')


const sequence = {
    _id:grades_control.nextId,
    get id() {
        return this._id++
    }
}



// let myGrades = (grades.grades).map(grades => grades)

const grades = grades_control.grades

function createGrade(grade) {
    if(!grade.id) grade.id = sequence.id
    grades.push(grade)
    grades_control.nextId++
    return grade
}

function getGrade(id) {
    return grades[id - 1] || {}
}

function getGrades() {
    return grades_control
}

function updateGrade(grade) {
    return grades[grade.id - 1] = grade
}

function deleteGrade(id) {
    
    const grade = grades[id -1]
    grades.splice((id - 1), 1)
    return grade
}

function totalGrade(student, subject) {
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

function calculatorAverage(subject, type) { 
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

function bestGrades(subject, type) { 
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
