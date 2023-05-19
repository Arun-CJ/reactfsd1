const Dashboard = () => {
  const email = sessionStorage.getItem("userEmail");
  return <div>Welcome {email}</div>;
};

export default Dashboard;
