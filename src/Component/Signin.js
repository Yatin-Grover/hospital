// import React from "react";
import "../css/Signin.css"
import Signup from './Signup';
import { useEffect,useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios"
// import Bootstrapcarousel from "./Bootstrapcarousel";

// import ReactDOM from "react-dom/client";

const Signin = () => {
  const history=useNavigate();

   const [email, setEmail] = useState('');
   const [password, setpassword] = useState('');

   async function submit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/",{
        email,password
      })
      .then((res)=>{
        if(res.data === "exist"){
history("/reports",{state:{id:email}})
        }
        else if(res.data === "notexist"){
         alert("user is not logged in")
        }
      })
      .catch((e)=>{
        alert("wrong details")
        console.log(e);
      })
     }
     catch{
  console.log(e);
     }
   }
//    const request = new XMLHttpRequest();
// request.open('POST', 'http://localhost:5000/');
// request.setRequestHeader('Content-Type', 'application/json');

// const requestData = {
//   email: 'example@example.com',
//   password: 'password123'
// };

// request.send(JSON.stringify(requestData) || null);

   

// const handleChange=(e)=>{
//   console.log(e.target.value);
// }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   };

  return (
    <>
      {/* <Bootstrapcarousel /> */}

      <div className="container-fluid">
        <section id="form">
          <img src="image/gallery-03.jpg" id="heart" alt=""></img>

                  <form action="POST" id="form1">

            <h3>Signin</h3>
            <p>Please fill the form to login your account!</p>
            <hr />
            <label>
              Email
              <input
                type="email"
                placeholder="enter your email"
                name="email"
                // value={inputs.firstname || ""}
                // onChange={(e)=>handleChange(e)}
                onChange={(e)=>{setEmail(e.target.value)}}

              />
            </label>
           <label>
              Password(Atleast 6 characters)
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                // value={inputs.password || ""}
                                onChange={(e)=>{setpassword(e.target.value)}}
            

              />
            </label>
            <input type="checkbox" id="checkbox" />
            <p id="p1">I accept the Terms of Use & Privacy Policy.</p>
                       <input type="submit" id="submit" onClick={submit}/>
            {/* <div className="login"> */}
            <p id="p2">Don't have an Account?</p>
            <Link className="link" id="signup" href="" aria-current="page" to='/Signup' element={<Signup/>}>
              Signup
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

export default Signin;
