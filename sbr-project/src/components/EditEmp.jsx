import React, { useEffect, useState } from 'react'
import empService from '../service/emp.service';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmp = () => {

    const [Employee, setEmployee] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        salary: 0.0,
    });

    const [msg, setMsg] = useState("");

    const data = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        empService.getEmployeeById(data.id)
        .then((res) => {
            setEmployee(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...Employee, [e.target.name]: value});
    };

    const  updateEmp = (e) => {
        e.preventDefault();
        empService.updateEmployee(Employee.id, Employee).then((res) => {
            navigate("/");
        }) .catch((error) => {
            console.log(error);
        });    
    };

  return (
    
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header text-center fs-3">
                        Edit Employee
                        {msg && <p className='text-success'>{msg}</p>}
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => updateEmp(e)}>
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
                                <input type='Reset' className='btn btn-danger ms-2' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>   
  );
};

export default EditEmp