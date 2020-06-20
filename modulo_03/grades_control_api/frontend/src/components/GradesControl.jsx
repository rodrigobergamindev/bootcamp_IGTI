import React from 'react'
import Action from './Action'

export default function GradesControl({grades, onDelete, onPersist}) {

    const tableGrades = []

    let currentStudent = grades[0].student
    let currentSubject = grades[0].subject
    let currentGrades = []
    let id = 1

    grades.forEach(grade => {
        if (grade.subject !== currentSubject) {
            tableGrades.push({
                id: id++,
                student: currentStudent,
                subject: currentSubject,
                grades: currentGrades
            })

            currentSubject = grade.subject;
            currentGrades = []
        }

        if(grade.student !== currentStudent) {
            currentStudent = grade.student
        }

        currentGrades.push(grade)

        //Após o loop, deve-se inserir o último elemento 
    })

    tableGrades.push({
        id: id++,
        student: currentStudent,
        subject: currentSubject,
        grades: currentGrades
    })


    const handleActionClick = (id,type) => {
        console.log(id)
        console.log(type)
    }

    return (
        <div className="container center">
            
            {tableGrades.map(({id, grades}) => {

                const finalGrade = grades.reduce((accumulator, current) => accumulator + current.value, 0)
                const gradeStyle = finalGrade >= 70 ? styles.goodGrade : styles.badGrade
                return (
                    <table className="striped" style={styles.table} key={id}>
            <thead>
            <tr>
                <th style={{width:'20%'}}>Alunos</th>
                <th style={{width:'20%'}}>Disciplina</th>
                <th style={{width:'20%'}}>Avaliação</th>
                <th style={{width:'20%'}}>Nota</th>
                <th style={{width:'20%'}}>Ações</th>
            </tr>
            </thead>
            <tbody>
            {grades.map(({id, subject, student, type, value, isDeleted}) => {
                return( 
                <tr key={id}>
                    <td>{student}</td>
                    <td>{subject}</td>
                    <td>{type}</td>
                    <td>{isDeleted ? '-' : value}</td>
                    <td>
                        <Action onActionClick={handleActionClick} id={id} type={isDeleted ? 'add' : 'edit'}/>
                        {!isDeleted && <Action onActionClick={handleActionClick} type='delete' id={id}/>}
                    </td>
                </tr>
                 )
            })}
            </tbody>
            <tfoot>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td style={{textAlign:'right'}}><strong>Total</strong></td>
                    <td style={gradeStyle}>{finalGrade}</td>
                </tr>
            </tfoot>
        </table>
                )
            })}
        
        </div>
    )
}

const styles = {
    goodGrade: {
        fontWeight: 'bold',
        color:'green'
    },
    badGrade: {
        fontWeight: 'bold',
        color:'red'
    },
    table: {
        margin: '20px',
        padding: '10px'
    }
}