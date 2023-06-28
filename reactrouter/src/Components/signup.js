import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      city: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Please enter name!!!")
        .min(3, "Name must be at least 3 characters")
        .max(30, "Name must not exceed 30 characters"),
      email: Yup.string().required().email(),
      phoneNumber: Yup.number().required(),
      password: Yup.string()
        .required()
        .min(8, "password should be atleast 8 characters"),
      city: Yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("/api/auth/registeruser", values)
        .then((res) => {
          alert(res.data.message);
          navigate("/sign-in");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  });

  useEffect(() => {
    console.log(formik.errors);
  }, [formik.errors]);

  // const handleInputs = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(user);
  //   axios
  //     .post("/api/auth/registeruser", user)
  //     .then((res) => {
  //       alert(res.data.message);
  //       navigate("/sign-in");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <form
      style={{ width: "600px", margin: "auto" }}
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <p style={{ color: "red" }}>{formik.errors.name}</p>
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
        />
        <p style={{ color: "red" }}>{formik.errors.email}</p>
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          // onChange={(e) => handleInputs(e)}
          onChange={formik.handleChange}
        />
        <p style={{ color: "red" }}>{formik.errors.phoneNumber}</p>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          // onChange={(e) => handleInputs(e)}
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
        />
        <p style={{ color: "red" }}>{formik.errors.password}</p>
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          CIty
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="city"
          value={formik.values.city}
          // onChange={(e) => handleInputs(e)}
          onChange={formik.handleChange}
        />
        <p style={{ color: "red" }}>{formik.errors.city}</p>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
