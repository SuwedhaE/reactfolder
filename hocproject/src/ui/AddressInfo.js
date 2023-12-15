import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { updateUserStart, submitAddressInfo, createAddressStart } from "../redux/action";
import withCounter from "../components/withCounter";

// const initialState = {
//   name: "",
//   email: "",
//   phone: "",
//   address: {
//     city: "",
//     state: "",
//     country: ""
//   }
// };

const AddressInfo = ({ submitAddressInfo }) => {
  const { UserName } = useParams();
  let location = useLocation();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const formData = { city, state, country, };
  const [editMode, setEditMode] = useState(false);
  const { users } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === Number(id));
      // setFormData({ ...singleUser });
    } else {
      setEditMode(false);
      // setFormData({ ...initialState });
    }
  }, [id]);

  // const handleAddressChange = (e) => {
  //   console.log(typeof(city));
  //   let { name, value } = e.target;
  //   setFormData({
  //      ...formData, 
  //      address: {
  //       ...formData.address,
  //       [name]: value 
  //      }
  //   });
  // };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (city && state && country) {
      const formData = { city, state, country }; // Collect form data
      if (!editMode) {
        dispatch(createAddressStart(formData));
        alert("User added successfully");
        navigate("/");
      } else {
        dispatch(updateUserStart({ id, formData }));
        alert("Updated successfully");
        navigate("/");
      }
      submitAddressInfo(formData); // Dispatch address info
    }
  };



  //   debugger
  //   console.log("userName", UserName);
  //   e.preventDefault();

  // //   setFormData({
  // //     ...formData, 
  // //      name: 'test' 
  // //  });
   
  //   console.log(typeof(city));
  //   console.log(formData);
  //   if (city && state && country) {
  //     console.log(`city: ${city}, states: ${state}, country: ${country}`)
  //     if (!editMode) {
  //       dispatch(createAddressStart(formData));
  //       alert("User added successfully");
  //       navigate("/");
  //     } else {
  //       dispatch(updateUserStart({ id, formData }));
  //       setEditMode(false);
  //       alert("Updated successfully");
  //       navigate("/");
  //     }
  //   }
   
  //   submitAddressInfo({ formData });

  // };


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
                    value={formData.city || ""}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label>Enter State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    required
                    value={formData.state || ""}
                    onChange={(e) => setState(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label>Enter Country</label>
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    required
                    value={formData.country || ""}
                    onChange={(e) => setCountry(e.target.value)}
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
