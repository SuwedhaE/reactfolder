import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeListing = () => {
    const [empData, empDataChange] = useState(null);
    const navigate = useNavigate();

    const LoadDetails = (id) => {
        navigate("/employee/details/" + id);
    }

    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }

    const DeleteFunc = (id) => {
        if(window.confirm('Do you want to delete this?')){
            fetch("http://localhost:8080/employee" + id,{
            method: "DELETE",
        }).then((res) => {
            alert("Deleted Successfully")
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
        }
    }

    useEffect(() => {
        fetch("http://localhost:8080/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empDataChange(resp);
        }).catch((err) =>{
            console.log(err.message);
        })
    }, [])
    return(
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success"> Add New (+) </Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {   empData &&
                                empData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a onClick={() => {LoadEdit(item.id)}} className="btn btn-success">Edit</a> &nbsp;
                                            <a onClick={() => {DeleteFunc(item.id)}} className="btn btn-danger">Delete</a> &nbsp;
                                            <a onClick={() => {LoadDetails(item.id)}} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmployeeListing