import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Registration from './page/Registration'
import Login from './page/Login';

function App() {
  return (
   <div>
    {/* <Home /> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Registration' element={<Registration/>}></Route>
      <Route path='/Login' element={<Login/>}/>
    </Routes>

{/* <div className="wrapper">
        <h1>Registration Form</h1>
        <div className="main">
          <div className="form-container">
            <Formik initialValues={{
                fname:'',
                lname:'',
                email:'',
                phone:'',
                password:''
            }}
            
            validate={(values)=>{
                const errors ={};
                if(!values.fname){
                    errors.fname='required!'
                }
                if(!values.lname){
                    errors.lname="Required!"
                }
                if(!values.email){
                    errors.email='required!'
                }
                else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                    errors.email="this must a valid email";
                }
                if(!values.password){
                    errors.password="required"
                }
                if(!values.phone){
                    errors.phone="required"
                }
                else if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.phone)){
                    errors.phone="only number must be define"
                }
                return errors;
            }}
                onSubmit={(values)=>{
                    console.log(values);
                }}
                
            >
            
                {(formik)=>(
              <form
             
                className="form-group"
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                 {console.log(formik.errors)}
                <label>Fname</label>
                <input
                  type="text"
                  name="fname"
                  className="form-control "
                  
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fname}
                ></input>
                <span className="text-danger">{formik.errors.fname} </span>
                <br></br>
                <label>Lname</label>
                <input
                  type="text"
                  name="lname"
                  className="form-control "
                  
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lname}
                ></input>
                 <span className="text-danger">{formik.errors.lname} </span>
                <br></br>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                ></input>
                <span className="text-danger">{formik.errors.email} </span>
                <br></br>
                <label>Phone No.</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                ></input>
                 <span className="text-danger">{formik.errors.phone} </span>
                <br></br>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                ></input>
                <span className="text-danger">{formik.errors.password} </span>
                <br></br>
                <button type="submit" className="btn btn-success btn-md">
                  Submit
                </button>
              </form>
              )}
            </Formik>
          </div>
        </div>
      </div> */}
   </div>
  );
}

export default App;
