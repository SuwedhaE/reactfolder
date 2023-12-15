import React, { useState } from 'react'
import empService from '../service/emp.service';

const AddEmp = () => {

    const [Employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        salary: ""
    })

    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...Employee, [e.target.name]: value});
    };

    const  submitEmp = (e) => {
        e.preventDefault();

        empService
          .saveEmployee(Employee)
          .then((res) => {
            setMsg("Employee added successfully");
            setEmployee({
                firstName: "",
                lastName: "",
                email: "",
                address: "",
                salary: ""
            })
          })
          .catch((error) => {
             console.log(error);
            });
    };

  return (
    <div>
        <br></br>
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header text-center fs-3">
                        Add Employee
                        {msg && <p className='text-success'>{msg}</p>}
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => submitEmp(e)}>
                            <div className="mb-3">
                                <label>Enter First Name</label>
                                <input type='text' className='form-control' name='firstName' value={Employee.firstName} onChange={(e)=>handleChange(e)}></input>
                            </div>
                            <div className="mb-3">
                                <label>Enter Last Name</label>
                                <input type='text' className='form-control' name='lastName' value={Employee.lastName} onChange={(e)=>handleChange(e)}></input>
                            </div>
                            <div className="mb-3">
                                <label>Enter Email</label>
                                <input type='text' className='form-control' name='email' value={Employee.email} onChange={(e)=>handleChange(e)}></input>
                            </div>
                            <div className="mb-3">
                                <label>Enter Address</label>
                                <input type='text' className='form-control' name='address' value={Employee.address} onChange={(e)=>handleChange(e)}></input>
                            </div>
                            <div className="mb-3">
                                <label>Enter Salary</label>
                                <input type='text' className='form-control' name='salary' value={Employee.salary} onChange={(e)=>handleChange(e)}></input>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-success'>Submit</button>
                                <input type='Reset' className='btn btn-danger ms-2' value="reset"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default AddEmp