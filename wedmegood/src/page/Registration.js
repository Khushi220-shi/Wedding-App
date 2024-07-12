import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Box, TextField } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaKey } from "react-icons/fa";
import register from '../assets/register.avif'

const registerSchema = Yup.object().shape({
  user: Yup.string().required("This field is required!"),
  email: Yup.string().email("Invalid Email").required("This field is required"),
  password: Yup.string()
    .required("This field is required")
    .min(6, "Must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("This field is required")
    .min(6, "Must be at least 6 characters long")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  remember: Yup.boolean().oneOf([true], "This field is required"),
});

const Registration = () => {
  const navigate = useNavigate();

  const notify = () => {
    toast.success("Register Successful", {
      position: "top-center",
    });
  };

  const handleRegistration = (values, { resetForm }) => {
    localStorage.setItem("username", values.user); // Store username in localStorage
    notify(); // Show success toast
    resetForm(); // Reset form fields
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 ">
                    Registration Form
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <Formik
                        initialValues={{
                          user: "",
                          email: "",
                          password: "",
                          confirmPassword: "",
                          remember: false
                        }}
                        validationSchema={registerSchema}
                        onSubmit={handleRegistration}
                      >
                        {({
                          handleSubmit,
                          handleChange,
                          handleBlur,
                          values,
                        }) => (
                          <Form
                            className="mx-1 mx-md-4"
                            onSubmit={handleSubmit}
                          >
                            <div className="d-flex flex-row align-items-center mb-4">
                              <div className="form-outline flex-fill mb-0">
                                <Box
                                  component="div"
                                  sx={{
                                    "& > :not(style)": { m: 1, width: "30ch" },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    id="outlined-basic"
                                    name="user"
                                    placeholder="Enter User Name"
                                    label={
                                      <FaUserAlt style={{ color: "#E72E77" }} />
                                    }
                                    variant="outlined"
                                    value={values.user}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="user"
                                    className="text-danger"
                                    component="div"
                                  />
                                </Box>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <div className="form-outline flex-fill mb-0">
                                <Box
                                  component="div"
                                  sx={{
                                    "& > :not(style)": { m: 1, width: "30ch" },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    id="outlined-basic"
                                    name="email"
                                    placeholder="Enter Email Id"
                                    label={
                                      <IoIosMail style={{ color: "#E72E77" }} />
                                    }
                                    variant="outlined"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="email"
                                    className="text-danger"
                                    component="div"
                                  />
                                </Box>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <div className="form-outline flex-fill mb-0">
                                <Box
                                  component="div"
                                  sx={{
                                    "& > :not(style)": { m: 1, width: "30ch" },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    id="outlined-basic"
                                    name="password"
                                    type="password"
                                    placeholder="Enter Password"
                                    label={
                                      <RiLockPasswordFill
                                        style={{ color: "#E72E77" }}
                                      />
                                    }
                                    variant="outlined"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="password"
                                    className="text-danger"
                                    component="div"
                                  />
                                </Box>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <div className="form-outline flex-fill mb-0">
                                <Box
                                  component="div"
                                  sx={{
                                    "& > :not(style)": { m: 1, width: "30ch" },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <TextField
                                    id="outlined-basic"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Enter Repeat Password"
                                    label={
                                      <FaKey style={{ color: "#E72E77" }} />
                                    }
                                    variant="outlined"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <ErrorMessage
                                    name="confirmPassword"
                                    className="text-danger"
                                    component="div"
                                  />
                                </Box>
                              </div>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-5">
                              <Field
                                className="form-check-input me-2"
                                type="checkbox"
                                name="remember"
                                id="form2Example3c"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="form2Example3"
                              >
                                I agree all statements in{" "}
                                <Link to="#!" style={{ color: "#E72E77" }}>
                                  Terms of service
                                </Link>
                              </label>
                              <ErrorMessage
                                name="remember"
                                className="text-danger ms-2"
                                component="div"
                              />
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="submit"
                                className="btn text-light btn-lg"
                                style={{ backgroundColor: "#E72E77" }}
                              >
                                Register
                              </button>
                            </div>
                            
                              <div >
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                  Already Have an Account !{" "}
                                  <Link to="/Login" className="link-danger">
                                    Login
                                  </Link>
                                </p>
                              </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 order-1 order-lg-2">
                      <img
                        src={register}
                        className="img-fluid rounded-2"
                        alt="Sample image"
                        style={{ height: "650px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
