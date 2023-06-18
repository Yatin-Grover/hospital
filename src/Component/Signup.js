// import React from "react";
import "../css/Signup.css";
import Signin from './Signin';
import Reports from './Reports';

import { useState } from "react";
import { Link } from "react-router-dom";
// import Bootstrapcarousel from "./Bootstrapcarousel";
import { authenticateSignup } from "../service/api";

// import ReactDOM from "react-dom/client";

const signupInitialValues ={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  phone:'',
}
const Signup = () => {
  // const [inputs, setInputs] = useState({});
  const [signup,setSignup] =useState(signupInitialValues);

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };
// const handleChange=(e)=>{
//   // console.log(e.target.value);
// }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(inputs);
  // };
  const onInputChange=(e)=>{
    // console.log(e);
  setSignup({...signup,[e.target.name]:e.target.value})
  // console.log(signup)
  }
  const diffToast=()=>{
    alert("Click Ok to got your health reports.");
  }
  const signupUser =async()=>{
   let response = await authenticateSignup(signup)
  }
  return (
    <>
      {/* <Bootstrapcarousel /> */}

      <div className="container-fluid">
        <section id="form">
          <img src="image/gallery-03.jpg" id="heart" alt=""></img>

          <form id="form1">
            <h3>Signup</h3>
            <p>Please fill the form to create an account!</p>
            <hr />
            <label>
              Firstname
    <input type="text" placeholder="enter your firstname" name="firstname" onChange={(e)=>onInputChange(e)} />
            </label>
            <label>
              Lastname
              <input
                type="text"
                placeholder="enter your lastname"
                name="lastname"
                // value={inputs.lastname || ""}
                // onChange={(e)=>handleChange(e)}
                onChange={(e)=>onInputChange(e)}

              />
            </label>
            <label>
              User name
              <input
                type="text"
                placeholder="enter your username"
                name="username"
                // value={inputs.lastname || ""}
                // onChange={(e)=>handleChange(e)}
                onChange={(e)=>onInputChange(e)}
              />
            </label>
            <label>
              Email
              <input
                type="text"
                placeholder="enter your email"
                name="email"
                // value={inputs.contact || ""}
                // onChange={(e)=>handleChange(e)}
                onChange={(e)=>onInputChange(e)}

              />
            </label>
            
            <label>
              Password(Atleast 6 characters)
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                // value={inputs.password || ""}
                // onChange={(e)=>handleChange(e)}
                onChange={(e)=>onInputChange(e)}
              />
            </label>
            <label>
              Contact-no
              <input
                type="text"
                placeholder="enter your contact number"
                name="phone"
                // value={inputs.contact || ""}
                onChange={(e)=>onInputChange(e)}
              />
            </label>
            <input type="checkbox" id="checkbox" />
            <p id="p1">I accept the Terms of Use & Privacy Policy.</p>
            <Link  className="link" id="submit1"  href="" aria-current="page" to='/reports' element={<Reports/>}  onClick={diffToast}>
            Submit
            </Link>
            {/* <div className="login"> */}
            <p id="p3">Already have an Account?</p>
            <Link className="link" id="signin" href="" aria-current="page" to='/signin' element={<Signin/>}>
              SignIn
            </Link>
            {/* </div> */}
          </form>
        </section>
      </div>
    </>
  );
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Signup />);

export default Signup;
