import React from 'react'

const List = ({emp,handleEdit,handleDelete}) => {
  return (
    <>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
      <th scope="col">Salary</th>
      <th scope="col">Joining</th>
      <th scope="col">Reliveing</th>
      <th scope="col">Status</th>
      <th scope="col">Contact</th>

      <th scope="col ">Action
      </th>


    </tr>
  </thead>
  <tbody>
  {emp.length > 0 ? (emp.map((emp,i) => (
    <tr key={emp.id}>
    
   
    <td>{emp.id}</td>
    <td>{emp.name}</td>
    <td>{emp.email}</td>
    <td>{emp.dob}</td>
    <td>{emp.salary}</td>
    <td>{emp.joining}</td>
    <td>{emp.reliveing}</td>
    <td>{emp.status}</td>
    <td>{emp.contact}</td>



    
    

    <td><button className='p-1 m-1 '
    onClick={() =>handleEdit(emp.id)}
    >Edit</button> 
    
    <button  className='p-1 m-1 '
    onClick={() => handleDelete(emp.id)}
    >Delete</button></td>

  </tr>
  ))) :(
    <h3>No Employee</h3>

    
    
   
  )}
 
  
  </tbody>
</table>
    </>
  )
}

export default List