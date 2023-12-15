import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  deleteUserStart,
  loadAddressStart,
  loadUsersStart,
} from "../redux/action";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { formValues } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadAddressStart());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Do you want delete that ?")) {
      dispatch(deleteUserStart(id));
      alert("deleted successfully");
    }
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  return (
    <div className="container">
      <h3 className="text-center mt-3">List of Users</h3>
      <table className="table mt-5">
        <thead className="bg-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Country</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            formValues && formValues.length > 0 &&
            formValues.map((user, num) => (
              <tr key={user.id}>
                <th scope="row">{num + 1}</th>
                <td>{user.name || 'N/A'}</td>
          <td>{user.email || 'N/A'}</td>
          <td>{user.phone || 'N/A'}</td>
          <td>{user.address && user.address.city ? user.address.city : 'N/A'}</td>
          <td>{user.address && user.address.state ? user.address.state : 'N/A'}</td>
          <td>{user.address && user.address.country ? user.address.country : 'N/A'}</td>

                <td>
                  <Link
                    to={"editinfo/" + user.id}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  <a
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-sm btn-danger ms-2"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  formValues: state.formValues || [],
});

const mapDispatchToProps = {
  loadUsersStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
