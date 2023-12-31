import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { createUserStart, updateUserStart, submitBasicInfo } from "../redux/action";
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

const BasicInfo = ({ submitBasicInfo }) => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editMode, setEditMode] = useState(false);
  const { formValues } = useSelector((state) => state.data);
  const formData = { name, email, phone };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = formValues.find((item) => item.id === Number(id));
      setName(singleUser.name);
      setEmail(singleUser.email);
      setPhone(singleUser.phone);
    } else {
      setEditMode(false);
      // Set initial values or clear the form when not editing
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [id, formValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      if (!editMode) {
        dispatch(createUserStart(formData));
        navigate(`/addextra?UserName=${name}`);
      } else {
        dispatch(updateUserStart({ id, formData }));
        setEditMode(false);
        navigate("/addextra");
      }
    }



//   // const [formData, setFormData] = useState(initialState);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const { users } = useSelector((state) => state.data);
//   const formData = { name, email, phone };
//   const navigate = useNavigate();
//   const location =useLocation();
//   const dispatch = useDispatch();
//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       setEditMode(true);
//       const singleUser = users.find((item) => item.id === Number(id));
//       // setFormData({ ...singleUser });
//     } else {
//       setEditMode(false);
//       // setFormData({ ...initialState });
//     }
//   }, [id],[location]);
// console.log(location);
//   // const handleChange = (e) => {
//   //   let { name, value } = e.target;
//   //   setFormData({ ...formData, [name]: value });
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('data : ', name , email, phone)
//     if (name && email && phone) {
//       if (!editMode) {
//         console.log(createUserStart, formData)
//         dispatch(createUserStart(formData));
//         navigate(`/addextra?UserName=${name}`);
//       } else {
//         dispatch(updateUserStart({ id, formData }));
//         setEditMode(false);
//         navigate("/addextra");
//       }
//     }
    submitBasicInfo({ formData });
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
                  <label>Enter Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    required
                    value={formData.name || ""}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label>Enter Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={formData.email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="mb-3">
                  <label>Enter Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    required
                    value={formData.phone || ""}
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary">
                    Next{"  ->"}
                  </button>
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
      submitBasicInfo,
};

// function mapDispatchToProps(dispatch)  {
//   return bindActionCreators({ submitBasicInfo }, dispatch) ;
// };

export default withCounter(connect(null, mapDispatchToProps )(BasicInfo));
// export default BasicInfo;
