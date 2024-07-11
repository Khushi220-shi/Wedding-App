import React, { useContext } from 'react';
import '../App.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import loginimg from '../assets/login-image.jpg';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../page/AuthContext';
import Registration from './Registration';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('This field is required'),
  password: Yup.string().required('This field is required').min(6, 'Must be at least 6 characters'),
  remember: Yup.boolean().oneOf([true], 'This field is required')
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const notify = () => toast.success("Login Successfully!", {
    position: 'top-center',
  });

  const notifyError = (message) => toast.error(message, {
    position: 'top-center',
  });

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#FFF3FE' }}>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={loginimg} className="img-fluid" style={{ height: '630px' }} alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  remember: false
                }}
                validationSchema={loginSchema}
                onSubmit={(values) => {
                  const storedUserData = JSON.parse(localStorage.getItem("userData"));
                  
                  if (!storedUserData) {
                    notifyError("No registered user found. Please register first.");
                    navigate('/Registration');
                  } else if (storedUserData.email === values.email && storedUserData.password === values.password) {
                    login();
                    notify();
                    navigate('/');
                  } else {
                    notifyError("Please  Registration !");
                  }
                }}
              >
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                      <button type="button" className="btn rounded-circle text-light mx-1" style={{ padding: '5px', width: '40px', height: '40px', backgroundColor: '#E72E77' }}>
                        <FaFacebookF />
                      </button>
                      <button type="button" className="btn rounded-circle text-light mx-1" style={{ padding: '5px', width: '40px', height: '40px', backgroundColor: '#E72E77' }}>
                        <FaTwitter />
                      </button>
                      <button type="button" className="btn rounded-circle text-light mx-1" style={{ padding: '5px', width: '40px', height: '40px', backgroundColor: '#E72E77' }}>
                        <FaLinkedinIn />
                      </button>
                    </div>

                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>

                    <div className="form-outline mb-4">
                      <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '35ch' } }} noValidate autoComplete="off">
                        <TextField
                          id="outlined-basic"
                          name="email"
                          placeholder="Enter Email Id"
                          label="Email"
                          variant="outlined"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="email" className="text-danger" component="div" />
                      </Box>
                    </div>

                    <div className="form-outline mb-3">
                      <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '35ch' } }} noValidate autoComplete="off">
                        <TextField
                          id="outlined-basic"
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          label="Password"
                          variant="outlined"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage name="password" className="text-danger" component="div" />
                      </Box>
                    </div>

                    <div className="d-flex justify-content-around align-items-center">
                      <div className="form-check mb-0">
                        <Field className="form-check-input me-2" type="checkbox" name="remember" id="form2Example3" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          Remember me
                        </label>
                        <ErrorMessage name="remember" className="text-danger" component="div" />
                      </div>
                      <Link className="text-body" to="/forgot-password">Forgot password?</Link>
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button type="submit" className="btn text-light btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', backgroundColor: '#E72E77' }}>
                        Login
                      </button>
                      <ToastContainer />
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account? <Link to="/Registration" className="link-danger">Register</Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
