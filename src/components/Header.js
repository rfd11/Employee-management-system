import React from 'react'

const Header = ({setAdding}) => {
  return (
    <>
      <h1>Employee management system </h1>
      <div>
        <button className='p-2 round' onClick={() => setAdding(true) }>Add Employee</button>
      </div>
    </>
  )
}

export default Header