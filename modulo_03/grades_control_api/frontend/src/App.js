import React, { useState, useEffect } from 'react'
import * as api from './api/apiService'
import Spinner from './components/Spinner'

export default function App() {
  
  const [allGrades, setAllGrades] = useState([])
  const [selectedGrade, setSelectedGrade] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
 
  
  useEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades()
      setTimeout(() => {
        setAllGrades(grades)
      }, 2000)
    }

    getGrades()
  }, [])

  return (
    <div>
      <h1 className="counter">Controle de Notas</h1>

      {allGrades.length > 0 && <p>Notas disponíveis</p>}
      {allGrades.length === 0 && <Spinner/>}
    </div>
    
  )
}
