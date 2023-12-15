import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const EmpCreate = () => {
    const [id, idChange] = useState("") 
    const [name, nameChange] = useState("") 
    const [email, emailChange] = useState("") 
    const [phone, phoneChange] = useState("") 
    const [active, activeChange] = useState(true) 

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        const empData = {name,email,phone,active};

        fetch("http://localhost:8080/employee",{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(empData)
        }).then((res) => {
            alert("Employee added to the List")
            navigate("/")
        }).catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <div>
            <div className="row">
                <div className="offer-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit} >
                        <div className="card" style={{textAlign:"left"}}>
                            <div className="card-title">
                                <h2>Create Employee</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Id</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onChange={e => nameChange(e.target.value)} className="form-control"></input>
                                        {/* {name.length==0 && <span className="text-danger">Enter Name</span>} */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e => emailChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={e => phoneChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e => activeChange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label" >Is Active</label>                                        
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit" >Save</button>  
                                            <Link to="/" className="btn btn-danger">Back</Link>                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
} 

export default EmpCreate