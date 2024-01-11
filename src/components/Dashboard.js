import React, { useState } from 'react'
import Header from './Header'

import List from './List'
import { employeesData } from '../data/epmData'
import Add from './Add'
import Edit from './Edit'

const Dashboard = () => {
    const[emp,setEmp] = useState(employeesData)
    const[selectedEmp,setSelectedEmp] = useState(null)
    const[adding,setAdding] = useState(false)
    const[editing,setEditing] = useState(false)

    const handleEdit = (id) => {
        const [editEmp] = emp.filter((editEmp) => editEmp.id === id)
        setSelectedEmp(editEmp)
        setEditing(true)

    }

    const handleDelete = (id) => {
        alert('Are you sure')
        const delEmp = emp.filter((delEmp) => delEmp.id === id)

        setEmp(emp.filter((delEmp) => delEmp.id !== id))
    }



  return (
    <>
    <div className='container'>
    {!adding && !editing && (
        <>
            <Header setAdding = {setAdding} />
            <List  emp = {emp} 
            handleEdit = {handleEdit}
             handleDelete ={handleDelete} 

             />
        </>

    )}
    {adding && (
        <Add
         emp={emp} 
         setEmp = {setEmp}
          setAdding = {setAdding} 

          />
    )}

    {editing && (
        <Edit
        emp = {emp}
        selectedEmp = {selectedEmp}
        setEmp = {setEmp}
        setEditing = {setEditing}
        />

    )}

    </div>
    </>
  )
}

export default Dashboard