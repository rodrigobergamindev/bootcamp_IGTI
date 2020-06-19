import React from 'react'
import * as api from './api/apiService'

export default function App() {
  
  const testApi = async () => {
    const result = await api.getAllGrades()
    console.log(result)
  }
  testApi()
  return (
    <h1>Olá Hooks</h1>
  )
}
