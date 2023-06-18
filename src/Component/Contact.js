import React from "react";
import Bootstrapcarousel from "./Bootstrapcarousel";
import '../css/Contact.css'
import { useState } from "react";
// import { Link } from "react-router-dom";

const Contact = () =>{
    const [inputs, setInputs] = useState({});

    const handleChange=(e)=>{
        console.log(e.target.value);
      }
        const handleSubmit = (event) => {
          event.preventDefault();
          console.log(inputs);
        };
    return(
        <>
        <Bootstrapcarousel/>
        <section id="sectiony">
        <h1>Contact Us</h1>
        
        
          <img src="image/doctor3.jpg" id="doct" alt=""></img>

          <form id="formc" onSubmit={handleSubmit}>
            <h3>Get In Touch</h3>
            <p>Don't hesitate to reach it out. Our hospital friendly staff is available to assist you with any inquiries.
             </p>
            <hr />
            <label>
              Name
              <input
                type="text"
                placeholder="enter your name"
                name="name"
                // value={inputs.firstname || ""}
                onChange={(e)=>handleChange(e)}
              />
            </label>
           <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                // value={inputs.password || ""}
                onChange={(e)=>handleChange(e)}
              />
            </label>
            <label>
              Message
              
              <input id="message"
                type="text"
                name="message"
                placeholder="enter your message"
                // value={inputs.password || ""}
                onChange={(e)=>handleChange(e)}
              />
            </label>
           
            <input type="submit" id="submit" />
            
            {/* </div> */}
          </form>

        </section>
        </>
    )
}
export default Contact