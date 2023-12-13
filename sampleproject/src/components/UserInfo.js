import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser, updateUser } from "../redux/action";

const UserInfo = ({ addUser, updateUser, userData }) => {
  // const [userData, setUserData] = useState({ name: '', email: '', phone: ''});
  const [name, setName] = useState(userData ? userData.name : "");
  const [email, setEmail] = useState(userData ? userData.email : "");
  const [phone, setPhone] = useState(userData ? userData.phone : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData) {
      updateUser(userData.id, { name, email, phone });
    } else {
      addUser({ name, email, phone });
    }
  };

  return (
    <div>
      <h1>Add Users</h1>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          className="form-control"
          name="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email : </label>
        <input
          type="text"
          className="form-control"
          name="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone : </label>
        <input
          type="text"
          className="form-control"
          name="phone"
          autoComplete="off"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="Submit">{userData ? "update User" : "Add User"}</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addUser,
  updateUser,
};

export default connect(null, mapDispatchToProps)(UserInfo);
