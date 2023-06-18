import React from "react";
import Bootstrapcarousel from "./Bootstrapcarousel";
import "../css/Aboutus.css";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";

const Aboutus = () => {
  return (
    <>
      <Bootstrapcarousel />
      <div className="container-fluid">
        <div className="section" id="sectiona">
          <img src="image/back.jpg" id="bannerA" alt=""></img>

          <h1>About Us</h1>
<img src="image/hr-brian-litzinger-one.png" alt="" id="hr5"/>


          <div className="col-sm-1">
            <img src="image/doctor2.jpg" id="bannerB" alt=""
			
			></img>
          </div>
          {/* <div className="col-sm-2"> */}
          <div class="col-sm-5"><h4 id="para1" class='text-box'>You would love to visit here</h4></div>
          <div class="col-sm-5"><h4 id="para" class='text-box'>You can expect an exceptional healthcare experience with a focus on patient care and cutting-edge medical services. Our hospital is equipped with state-of-the-art facilities and staffed by highly trained medical professionals who are dedicated to providing the best possible care for our patients.<br/>
          Upon arriving at our hospital, you will be greeted by a welcoming and compassionate team who will guide you through the registration process. Our spacious and modern facility is designed to create a comfortable and calming environment for patients and their families.
          Additionally, our hospital embraces technology to enhance patient care. We utilize the latest medical equipment and digital systems to streamline processes and improve accuracy in diagnostics and treatments.
          We understand that visiting a hospital can be an anxious experience, and we strive to alleviate any concerns or fears you may have.</h4></div>
          {/* </div> */}
        </div>
        {/* --------------section b-------------------------- */}
        <div className="section" id="sectionb">
          <img src="image/images4.jpg" alt=""></img>
          <h1>Our Services</h1>


          <div class="container" id="cont1">

<div class="col-md-4">
<div class="four columns">
		<a href="Reports">
		<div class="content-box color-effect-1">
			<h2>Reports</h2>
				<div class="box-icon-wrap box-icon-effect-1 box-icon-effect-1a">
					<div class="box-icon">
            <h3><TbReportMedical/></h3></div>
				</div>

			<p>This service allows users to generate, access and manage various types of reports through internet.</p>
		</div>
		</a>
	</div>
</div>
</div>	

<div class="container" id="cont2">

<div class="col-md-4">
<div class="four columns">
		<a href="Ambulance">
		<div class="content-box color-effect-1">
			<h2>24/7 Ambulance</h2>
				<div class="box-icon-wrap box-icon-effect-1 box-icon-effect-1a">
					<div class="box-icon">
            <h3><FaAmbulance/></h3></div>
				</div>

			<p>Providiing emergency medical transportation and pre-hospital care to individual who are injured.</p>
		</div>
		</a>
	</div>
</div>
</div>

<div class="container" id="cont3">

<div class="col-md-4">
<div class="four columns">
		<a href="Laboratories">
		<div class="content-box color-effect-1">
			<h2>Laboratories</h2>
				<div class="box-icon-wrap box-icon-effect-1 box-icon-effect-1a">
					<div class="box-icon">
            <h3><BsFillHeartPulseFill/></h3></div>
				</div>

			<p>These labs specialize in analyzing biological samples for diagnostics or research purposes.</p>
		</div>
		</a>
	</div>
</div>
</div>

<div class="container" id="cont4">

<div class="col-md-4">
<div class="four columns">
		<a href="Medical">
		<div class="content-box color-effect-1">
			<h2>Medical</h2>
				<div class="box-icon-wrap box-icon-effect-1 box-icon-effect-1a">
					<div class="box-icon">
            <h3><AiFillMedicineBox/></h3></div>
				</div>

			<p>Medical Service offers a wide range of healthcare service such as internal medicine, cardiology.</p>
		</div>
		</a>
	</div>
</div>
</div>





        </div>
      </div>
    </>
  );
};
export default Aboutus;
