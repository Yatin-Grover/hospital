import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { BiSearchAlt } from "react-icons/bi";
import { FaHandHoldingMedical } from "react-icons/fa";

import Home from "./Home";
import Aboutus from "./Aboutus";
import Specialist from "./Specialist";
import Department from "./Department";
import Signup from "./Signup";
import Contact from "./Contact";
import Medicine from "./Medicine";


const input = () => {};
const Navbar = () => {
  function changeColor(e) {
    e.target.style.color = "blue";
  }
  function backColor(e) {
    e.target.style.color = "white";
  }

  const diffToast=()=>{
    alert("You need to login first");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand">{/* <div className='yat'> */}</Link>
        <div className="container-fluid">
          <div className="logo">
          <Link aria-current="page"
                  to="Medicine"
                  element={<Medicine/>}><h3 style={{ color: "white" }}>
              {input} 
              <FaHandHoldingMedical />
            </h3></Link>
          </div>

          <Link className="navbar-brand" aria-current="page"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-2 mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active mx-2"
                  style={{ color: "white" }}
                  onMouseEnter={changeColor}
                  onMouseLeave={backColor}
                  aria-current="page"
                  to="/"
                  element={<Home />}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  style={{ color: "white" }}
                  onMouseEnter={changeColor}
                  onMouseLeave={backColor}
                  aria-current="page"
                  to="/Aboutus"
                  element={<Aboutus />}
                >
                  Aboutus
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  style={{ color: "white" }}
                  onMouseEnter={changeColor}
                  onMouseLeave={backColor}
                  aria-current="page"
                  to="Specialist"
                  element={<Specialist />}
                >
                  Specialist
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  style={{ color: "white" }}
                  onMouseEnter={changeColor}
                  onMouseLeave={backColor}
                  aria-current="page"
                  to="Department"
                  element={<Department />}
                >
                  Department
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  style={{ color: "white" }}
                  onMouseEnter={changeColor}
                  onMouseLeave={backColor}
                  aria-current="page"
                  to="/signup"
                  element={<Signup />} onClick={diffToast}
                >
                  Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2"
                  style={{ color: "white" }}
                  onMouseEnter={changeColor}
                  onMouseLeave={backColor}
                  aria-current="page"
                  to="Contact"
                  element={<Contact />}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              {/* <button className="btn btn-outline-success" id="success" type="submit">User Requirements</button> */}
              <input
                className="form-control me-2"
                type="search"
                id="search"
                placeholder="Search"
                aria-label="Search"
              />
              <h3 id="searching" style={{ color: "white" }}>
                {input}
                <BiSearchAlt />
              </h3>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
