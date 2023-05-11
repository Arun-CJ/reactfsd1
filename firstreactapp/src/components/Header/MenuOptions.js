const MenuOptions = (props) => {
  return (
    <ul>
      {props.options.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default MenuOptions;
