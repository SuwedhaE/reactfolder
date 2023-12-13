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
  // const location = useLocation();
  const { formValues } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Do you want delete that ?")) {
      dispatch(deleteUserStart(id));
      alert("deleted successfully");
    }
  };

  console.log(formValues);

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
          {formValues &&
            formValues.map((user, num) => (
              <tr key={user.id}>
                <th scope="row">{num}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}</td>
                <td>{user.address.state}</td>
                <td>{user.address.country}</td>
                {/* {users.address ? (
                  <>
                    <td>{user.address.city}</td>
                    <td>{user.address.state}</td>
                    <td>{user.address.country}</td>
                  </>
                ) : (
                  <>
                    <td>Address not provided</td>
                  </>
                )} */}
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
  // users: state.users,
});

const mapDispatchToProps = {
  loadUsersStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
