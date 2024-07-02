import React from 'react'
import '../App.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import  loginimg from '../assets/login-image.jpg'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
     <section className="vh-100" style={{backgroundColor:'#FFF3FE'}}>
  <div className="container-fluid " >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src={loginimg}
          className="img-fluid " style={{height:'630px'}} alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <Formik
        initialValues={{
          email:'',
          password:'',
          remebar:''
        }}
        validate={(values)=>{
          const errors={};
          if(!values.email){
            errors.email='Required!'
          }
          else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email="This must a valid email";
        }
        if(!values.password){
          errors.password="Required"
      }

      if(!values.remebar){
        errors.remebar='Must Be Required!'
      }

      return errors;
        }}
        onSubmit={(values)=>{
          console.log(values);
      }}
        >
       {(formik)=>(
        <form
        onSubmit={formik.handleSubmit}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button   className="btn rounded-circle text-light mx-1" style={{padding:'5px',width:'40px',height:'40px',backgroundColor:'#E72E77'}}>
              {/* <FacebookOutlinedIcon/> */}
              <FaFacebookF/>

            </button>

            <button   className="btn rounded-circle text-light mx-1" style={{padding:'5px',width:'40px',height:'40px',backgroundColor:'#E72E77'}}>
              <FaTwitter/>
            </button>

            <button   className="btn rounded-circle text-light mx-1" style={{padding:'5px',width:'40px',height:'40px',backgroundColor:'#E72E77'}}>
              <FaLinkedinIn/>
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" name='email'  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email} placeholder='Enter Email Id' label="Email" variant="outlined" />
                  <br></br>
                   <span className="text-danger">{formik.errors.email} </span>
    </Box>
          </div>

          {/* <!-- Password input --> */}
          <div data-mdb-input-init className="form-outline mb-3">
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" name='password' type='password' onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password} placeholder='Enter Password '  
                  label="Password" variant="outlined" />
                   <span className="text-danger">{formik.errors.password} </span>
    </Box>
          </div>

          <div className="d-flex justify-content-around align-items-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" name='remebar' id="form2Example3" onClick={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  value={formik.values.remebar}/>
              <label className="form-check-label"  for="form2Example3" >
                Remember me
              </label>
              <br></br>
              <span className="text-danger">{formik.errors.remebar} </span>
            </div>
            <Link   className="text-body">Forgot password?</Link>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn text-light btn-lg"
              style={{paddingLeft: '2.5rem', paddingRight: '2.5rem' ,backgroundColor:'#E72E77'}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link href="#!"
                className="link-danger" to='/Registration' >Register</Link></p>
          </div>

        </form>
       )}
        </Formik>
      </div>
    </div>
  </div>

</section>
    </div>
  )
}

export default Login
