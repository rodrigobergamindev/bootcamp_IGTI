import React from 'react'
import Users from './components/Users/Users'
import Toggle from './components/Users/Toggle'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
 const [users, setUsers] = useState([])
 const [showUsers, setShowUsers] = useState(false)

 
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(
        'https://randomuser.me/api/?seed=rush&nat=br&results=10'
      )
      const json = await res.json()
      setUsers(json.results)
    }
    fetchUsers()
  }, [])

  const handleShowUsers = (isChecked) => {
   setShowUsers(isChecked)
  }

    return (
      <div>
        <h3>React LifeCycle</h3>
      <Toggle description="Mostrar usuários: " enabled={showUsers} onToggle={handleShowUsers}/>
      <hr/>
      {showUsers && <Users users={users}/>}
      </div>
    )


}
