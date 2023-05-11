import MenuOptions from "./MenuOptions";

const Header = (props) => {
  const menuData = ["Home", "About Us", "Contact Us"];
  // console.log(props);
  return (
    <div>
      Website Name : {props.name}
      <div>
        <MenuOptions options={menuData} />
      </div>
    </div>
  );
};

export default Header;
