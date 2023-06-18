import React from "react";
import '../css/Footer.css'
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () =>{
    return(
        <>
        <div className="container-fluid">
            {/* <div className="new"> */}
    <div className="footer">
    <div class="row px-md-3">
        <div class="col-sm-6 col-lg-3 py-3">
          <h5>Company</h5>
          <ul class="footer-menu">
            <li><a href="About Us">About Us</a></li>
            <li><a href="Career">Career</a></li>
            <li><a href="Editorial">Editorial Team</a></li>
            <li><a href="Protection">Protection</a></li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-3 py-3">
          <h5>More</h5>
          <ul class="footer-menu">
            <li><a href="Terms">Terms & Condition</a></li>
            <li><a href="Terms">Privacy</a></li>
            <li><a href="Advertise">Advertise</a></li>
            <li><a href="Join">Join as Doctors</a></li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-3 py-3">
          <h5>Our partner</h5>
          <ul class="footer-menu">
            <li><a href="Fitness">One-Fitness</a></li>
            <li><a href="Drugs">One-Drugs</a></li>
            <li><a href="Live">One-Live</a></li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-3 py-3">
          <h5>Contact</h5>
          <p class="footer-link mt-2">351 Willow Street Franklin, MA 02038</p>
          <a href="footer1" class="footer-link">701-573-7582</a>
          <a href="footer2" class="footer-link">healthcare@temporary.net</a>

          <h5 class="mt-3">Social Media</h5>
          <div class="footer-sosmed mt-3">
            <a href="outline" target="_blank"><span><AiOutlineMail/></span></a>
            <a href="instagram" target="_blank"><span><FaInstagram/></span></a>
            <a href="facebook" target="_blank"><span><BsFacebook/></span></a>
            <a href="github" target="_blank"><span><BsGithub/></span></a>
            <a href="twitter" target="_blank"><span><BsTwitter/></span></a>
          </div>
        </div>
      </div>
<hr/>
<p id="copyright">Copyright &copy; 2023 <a href="https://macodeid.com/" target="_blank">MACode ID</a>. All right reserved</p>
      
    </div>
    </div>
    {/* </div> */}
        </>
    )
}
export default Footer