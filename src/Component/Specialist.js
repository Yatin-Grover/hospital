import React from "react";
import Bootstrapcarousel from "./Bootstrapcarousel";
import "../css/Specialist.css";

const Specialist = () => {
  return (
    <>
      <Bootstrapcarousel />
      <div className="container-fluid">
        <div className="section" id="sectionz">
          <h1>Specialist</h1>
<img src="image/hr-brian-litzinger-one.png" id="hr3"/>
        

          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="content" id="content1">
                  {" "}
                  <a href="#">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="image/gallery-08.jpg" />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Pathologist Medical Technologist</h3>
                      <p class="content-text">
                        <i class="fa fa-map-marker"></i> Medical lab
                      </p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div class="col-md-4">
                <div class="content" id="content2">
                  {" "}
                  <a href="#">
                    <div class="content-overlay"></div>
                    <img class="content-image" src="image/gallery-06.jpg" />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Periodontist or Gum Specialist</h3>
                      <p class="content-text">
                        <i class="fa fa-map-marker"></i> Dentist
                      </p>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-5"><h4 id="para3" class='text-box'>Your health is our first priority</h4></div>
          <div class="col-sm-5"><h4 id="para2" class='text-box'>You can expect an exceptional healthcare experience with a focus on patient care and cutting-edge medical services. Our hospital is equipped with state-of-the-art facilities and staffed by highly trained medical professionals who are dedicated to providing the best possible care for our patients.<br/>
          Upon arriving at our hospital, you will be greeted by a welcoming and compassionate team who will guide you through the registration process. Our spacious and modern facility is designed to create a comfortable and calming environment for patients and their families.
          Additionally, our hospital embraces technology to enhance patient care. We utilize the latest medical equipment and digital systems to streamline processes and improve accuracy in diagnostics and treatments.
          We understand that visiting a hospital can be an anxious experience, and we strive to alleviate any concerns or fears you may have.</h4></div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* <div className="section"> */}
        <div className="section" id="section4">
          <div className="banner3">
            <img className="d-block" src="Image/unsplash.jpg" />
          </div>
          <h1>Our Doctors</h1>
          <div className="banner4">
            <img className="d-block" src="Image/img-3.jpg" />
          </div>
          <div
            className="card"
            id="doctor1"
            style={{ width: "195px", height: "80px" }}
          >
            <h6>Surgeon</h6>
            <hr />
            <h4>Mary Edwards</h4>
          </div>
          <div className="banner5">
            <img className="d-block" src="Image/bg-doctor.png" />
          </div>
          <div
            className="card"
            id="doctor2"
            style={{ width: "195px", height: "80px" }}
          >
            <h6>Neurologist</h6>
            <hr />
            <h4>Helen Brooke</h4>
          </div>
          <div className="banner6">
            <img className="d-block" src="Image/img-2.jpg" />
          </div>
          <div
            className="card"
            id="doctor3"
            style={{ width: "195px", height: "80px" }}
          >
            <h6>Dermatologist</h6>
            <hr />
            <h4>Daniel Hale</h4>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default Specialist;
