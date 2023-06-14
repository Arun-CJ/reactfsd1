import { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { getName, getUserName } from "../redux/actions/sampleAction";
// import sampleReducer from "../redux/reducers/sampleReducer";

const SampleComponent = (props) => {
  // const dispatch = useDispatch();
  // const reduxState = useSelector((state) => state.sampleReducer);
  // console.log(reduxState);

  useEffect(() => {
    // dispatch(getName());
  }, []);

  return (
    <div>
      <p>Sample Component</p>
      <button
        onClick={
          () => props.getUserName()
          // dispatch(getUserName())
        }
      >
        Get User Name
      </button>
      UserName : {props.reducerData?.username.username}
    </div>
  );
};

const mapStateToProps = (state) => ({
  reducerData: state.sampleReducer,
});

const mapDispatchToProps = {
  getName,
  getUserName,
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
