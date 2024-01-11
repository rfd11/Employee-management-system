import React, { useState } from 'react'

const Edit = ({emp,selectedEmp,setEmp,setEditing}) => {
    const id = selectedEmp.id

    const[name,setName] = useState(selectedEmp.name)
  const[dob,setDob] = useState(selectedEmp.dob)
  const[email,setEmail] = useState(selectedEmp.email)
  const[salary,setSalary] = useState(selectedEmp.salary)
  const[status,setStatus] = useState(selectedEmp.status)
  const[joining,setJoining] = useState(selectedEmp.joining)
  const[reliveing,setReliveing] = useState(selectedEmp.reliveing)
  const[contact,setContact] = useState(selectedEmp.contact)

  const handleUpdate = (e) =>{
    e.preventDefault()
    const newEdit = {
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

      for(let i=0; i<emp.length; i++){
        if(emp[i].id === id){
            emp.splice(i,1,newEdit)
            break;
        }
      }
      
      setEmp(emp)
      setEditing(false)
  }
  return (
    <>
         <form onSubmit={handleUpdate}>
    <h1>Edit employee details</h1>
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
 
  <button type="submit" className="btn btn-primary p-3 m-3">Update</button>
  <button  className="btn btn-primary p-3 m-3" onClick={() => setEditing(false)}>Back</button>

  
  

</form>
    </>
  )
}

export default Edit