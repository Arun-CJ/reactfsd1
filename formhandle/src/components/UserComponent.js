const UserComponent = (props) => {
  const { userData } = props;
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
          </thead>
          <tbody>
            {userData.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>

                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.phoneNumber}</td>
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
