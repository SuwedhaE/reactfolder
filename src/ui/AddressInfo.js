import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { updateUserStart, submitAddressInfo, createAddressStart } from "../redux/action";
import withCounter from "../components/withCounter";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: {
    city: "",
    state: "",
    country: ""
  }
};

const AddressInfo = ({ submitAddressInfo }) => {
  const { UserName } = useParams();
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { users } = useSelector((state) => state.data);
  const { address } = formValue || {};
  const { city, state, country } = address || {};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id]);

  const handleAddressChange = (e) => {
    console.log(typeof(city));
    let { name, value } = e.target;
    setFormValue({
       ...formValue, 
       address: {
        ...formValue.address,
        [name]: value 
       }
    });
  };

  const handleSubmit = (e) => {
    debugger
    console.log("userName", UserName);
    e.preventDefault();

    setFormValue({
      ...formValue, 
     
       name: 'test' 
    
   });


   
    console.log(typeof(city));
    console.log(formValue);
    if (city && state && country) {
      console.log(`city: ${city}, states: ${state}, country: ${country}`)
      if (!editMode) {
        dispatch(createAddressStart(formValue));
        alert("User added successfully");
        navigate("/");
      } else {
        dispatch(updateUserStart({ id, formValue }));
        setEditMode(false);
        alert("Updated successfully");
        navigate("/");
      }
    }
   
   
    submitAddressInfo({ UserName, city, state, country  });

  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center fs-3">
              {!editMode ? "Add User Data" : "Update User Details"}
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Enter City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    required
                    value={formValue.address.city || ""}
                    onChange={handleAddressChange}
                  ></input>
                </div>
                <div className="mb-3">
                  <label>Enter State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    required
                    value={formValue.address.state || ""}
                    onChange={handleAddressChange}
                  ></input>
                </div>
                <div className="mb-3">
                  <label>Enter Country</label>
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    required
                    value={formValue.address.country || ""}
                    onChange={handleAddressChange}
                  ></input>
                </div>
                <div className="text-center">
                  <button className="btn btn-success">
                    {editMode ? "update" : "Submit"}
                  </button>
                  {/* <input type='Reset' className='btn btn-danger ms-2' value="reset"/> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  submitAddressInfo,
};
 
export default withCounter(connect(null, mapDispatchToProps)(AddressInfo));

// export default AddressInfo;
