import React, { useState } from 'react'
import '../App.css';

const Add = ({  emp,setEmp,setAdding}) => {
  const[name,setName] = useState('')
  const[dob,setDob] = useState('')
  const[email,setEmail] = useState('')
  const[salary,setSalary] = useState('')
  const[status,setStatus] = useState('')
  const[joining,setJoining] = useState('')
  const[reliveing,setReliveing] = useState('')
  const[contact,setContact] =useState('')

  

  const handleAdd = (e) => {
    e.preventDefault()
    const id = emp.length + 1;
    const newEmp = {
      id,
      name,
      
      email,
      dob,
      salary,
      joining,
      reliveing,
      status,
      contact
    }
    emp.push(newEmp);
    setEmp(emp)
    setAdding(false)
     
     
    

  }
  
  return (
    <>
    <div className='App'>
    <form onSubmit={handleAdd}>
    <h1>Add employee details</h1>
  <div className="mb-2">
    <input type="text" placeholder='Enter name'  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    value={name} onChange={(e) => setName(e.target.value)}
    required
     />
  
  </div>
  <div className="mb-2">
    <input type="date" placeholder='DOB' className="form-control" id="exampleInputPassword1"
    value={dob} onChange={(e) => setDob(e.target.value)}
    required
     />
  </div>
  <div className="mb-2">
    <input type="email" placeholder='E-mail' className="form-control" id="exampleInputPassword1" 
      value={email} onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>
  <div className="mb-2">
    <input type="text" placeholder='salary' className="form-control" id="exampleInputPassword1"
    value={salary} onChange={(e) => setSalary(e.target.value)}
    required
     />
  </div>
  <div className="mb-2">
    <input type="date" placeholder='Joining' className="form-control" id="exampleInputPassword1"
    value={joining} onChange={(e) => setJoining(e.target.value)}
    required
     />
  </div>
  <div className="mb-2">
    <input type="date" placeholder='Reliveing' className="form-control" id="exampleInputPassword1" 
      value={reliveing} onChange={(e) => setReliveing(e.target.value)}
      required
    />
  </div>
  <div className="mb-2">
    <input type="text" placeholder='Status' className="form-control" id="exampleInputPassword1" 
    value={status} onChange={(e) => setStatus(e.target.value)}
    required
     />
  </div>
  <div className="mb-2">
    <input type="text" placeholder='contact' className="form-control" id="exampleInputPassword1" 
    value={contact} onChange={(e) => setContact(e.target.value)}
    required
     />
  </div>
 
  <button type="submit" className="btn btn-primary p-3 m-3">Add</button>
  <button  className="btn btn-primary p-3 m-3" onClick={() => setAdding(false)}>Back</button>

  
  

</form>

    </div>
 

    </>
  )
}

export default Add