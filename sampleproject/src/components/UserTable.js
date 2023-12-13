import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listUser } from "../redux/action";

const UserTable = () => {

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(listUser());
      }, [dispatch]);

    const handleDelete = () => {

    }

  return (
    <div className="container">
      <h3 className="text-center mt-3">List of Users</h3>
      <table className="table mt-5">
        <thead className="bg-light">
            <tr>
                <td>S.No</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone No</td>
                <td>City</td>
                <td>State</td>
                <td>Country</td>
            </tr>
        </thead>
        <tbody>
        {users &&
            users.map((user, num) => (
              <tr key={user.id}>
                <th scope="row">{num + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}</td>
                <td>{user.address.state}</td>
                <td>{user.address.country}</td>
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

export default UserTable;