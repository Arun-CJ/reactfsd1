import { useEffect, useState } from "react";
import EditComponent from "./editComponent";

const UserComponent = (props) => {
  const { userData, editFunction, display, setDisplay } = props;
  const [displayEdit, setDisplayEdit] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEdit = (idx) => {
    setDisplayEdit(true);
    setSelectedRow(idx);
    setDisplay(true);
  };

  useEffect(() => {
    setDisplayEdit(display);
    console.log("triggering display value", display);
  }, [display]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>User Details</h3>
      {/* {console.log("props", userData)} */}
      <div>
        <table className="table table-stripped">
          <thead className="thead-dark">
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Action</th>
          </thead>
          <tbody>
            {userData.map((item, idx) => {
              // console.log(
              //   displayEdit && selectedRow === idx,
              //   displayEdit,
              //   selectedRow,
              //   idx,
              //   selectedRow === idx
              // );
              return displayEdit && selectedRow === idx ? (
                <EditComponent
                  user={item}
                  editFunction={editFunction}
                  index={idx}
                />
              ) : (
                <tr key={idx}>
                  <td>{item.name}</td>

                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.phoneNumber}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(idx)}
                    >
                      Edit Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserComponent;
