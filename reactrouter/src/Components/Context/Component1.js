import Component2 from "./Component2";

const Component1 = ({ user }) => {
  return (
    <div>
      <p>Component 1</p>
      <Component2 user={user} />
    </div>
  );
};

export default Component1;
