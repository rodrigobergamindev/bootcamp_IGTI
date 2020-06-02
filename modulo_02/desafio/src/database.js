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


module.exports = { createGrade, getGrade, getGrades, updateGrade, deleteGrade }