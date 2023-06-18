import React from "react";
import '../css/Home.css';
// import Accordion from 'react-bootstrap/Accordion'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";  
import Bootstrapcarousel from "./Bootstrapcarousel";



// import { FaBeer } from 'react-icons/fa';
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

const Home = () =>{
    
    return(
        <>
    <Bootstrapcarousel/>
  
 <div className="container-fluid">
    <div className="section" id="section1">
        <div className="col">

  <div class="reveal">

        <div class="col-sm-5"><h1 id="over2" class='hover-2'>Heal & Health Medical Center</h1></div>
<div class="col-sm-6"><h4 id="over4" class='hover-4'>Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity. The enjoyment of the highest attainable standard of health is one of the fundamental rights of every human being without distinction of race, religion, political belief, economic or social condition.<br/>
Being healthy should be part of your overall lifestyle. Living a healthy lifestyle can help prevent chronic diseases and long-term illnesses. Feeling good about yourself and taking care of your health are important for your self-esteem and self-image. Maintain a healthy lifestyle by doing what is right for your body.
Doctors play a crucial role in safeguarding and improving our health. They are highly trained medical professionals who diagnose, treat, and prevent illnesses, guiding us on the path to optimal health. Doctors possess extensive knowledge and expertise in their respective fields, gained through years of education, training, and experience. </h4></div>
<button type="submit" class="btn btn-danger">Read More</button>
<div class="banner"><img src="image/doctor5.png" alt=""></img></div>
</div>
</div>
        {/* </div> */}
    </div>
    
    {/* -----section2----- */}
    <div className="section" id="section2">
    <div className="img1"><img
          className="d-block"
          src="image/blog-img-01.jpg"
          alt=""/>    </div>
      <div class="reveal">
    <div className="col-sm-4">
      <h1>Why Choose Our Medical</h1>

        <img
          className="d-block"
          src="Image/doctor10.jpg"
          alt=""/>
        <div class="text-container" id="reveal2">
      <div class="text-box" id="reveal2">

        <h3 style={{color: '#235f63'}}>Medical Mission</h3>
        <p style={{color: '#235f63'}}>
        Perform competently all medical and invasive procedures considered 
        essential for the area of practice.Provide health care services aimed at preventing health problems or maintaining health.
        </p>
      </div>
</div>

        </div> 
       
    </div>
    
       
</div>
   


    {/* -----Section3------ */}
    <div className="section" id="section3">
    <h1>We Care For You</h1>
<img src="image/hr-brian-litzinger-one.png" id="hr8" alt=""/>

    <div className="card" style={{border: '0'}}>
    <Card style={{ width: '18rem', height: '25rem', border: '0'}}>
      <div className="body">
      <Card.Img variant="top" src="image/gallery-06.jpg" />
      <Card.Body>
        <div className="font">
        <Card.Title style={{color: '#235f63'}}>Surgery-</Card.Title>
        <Card.Text style={{color: 'black'}}>
        Surgery is a medical specialty that uses manual & 
        instrumental techniques to physically reach into a subject's body
         in order to treat pathological conditions.
        </Card.Text>
        </div>
        <Button variant="primary">More Details</Button>
      </Card.Body>
      </div>
    </Card>
    
    </div>

    <div className="card1">
    <Card style={{ width: '18rem', height: '25rem', border: '0'}}>
      <div className="body">
      <Card.Img variant="top" src="image/blog-img-03.jpg" style={{height: '217px'}}/>
      <Card.Body>
      <div className="font">
        <Card.Title style={{color: '#235f63'}}>Cardiac Science-</Card.Title>
        <Card.Text style={{color: 'black'}}>
        Cardiology is the study of the heart. Cardiology is a branch of medicine that deals 
        with disorders of the heart and the cardiovascular system.
        </Card.Text>
        </div>
        <Button variant="primary">More Details</Button>
      </Card.Body>
      </div>
    </Card>
    
    </div>]

    <div className="card2">
    <Card style={{ width: '18rem', height: '25rem', border: '0'}}>
      <div className="body">
      <Card.Img variant="top" src="image/gallery-08.jpg" />
      <Card.Body>
      <div className="font">
        <Card.Title style={{color: '#235f63'}}>Pediatrics-</Card.Title>
        <Card.Text style={{color: 'black'}}>
        Pediatrics is the branch of medicine that 
        involves the medical care of infants, children, 
        adolescents, and young adults & paediatrics covers many of their youth
        </Card.Text>
        </div>
        <Button variant="primary">More Details</Button>
      </Card.Body>
      </div>
    </Card>
    
    </div>
    {/* <div class="accordion"> */}
        {/* <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header id="item" class="bg-secondary">Accordion Item #1
        
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
    {/* </div> */}
    
    </div>
    
    {/* --section4-- */}
    <div className="section" id="section4">
    <div className="banner3"><img className="d-block"
          src="Image/unsplash.jpg" alt=""/></div>
    <h1>Our Doctors</h1>
<img src="image/hr-brian-litzinger-one.png" id="hr7" alt=""/>

    <div className="banner4"><img className="d-block"
          src="Image/img-3.jpg" alt=""/></div>
          <div className="card" id="doctor1" style={{width:'195px', height:'80px'}}>
            <h6>Surgeon</h6>
            <hr/>
            <h4>Mary Edwards</h4></div>
    <div className="banner5"><img className="d-block"
          src="Image/bg-doctor.png" alt=""/></div>
          <div className="card" id="doctor2" style={{width:'195px', height:'80px'}}>
          <h6>Neurologist</h6>
            <hr/>
            <h4>Helen Brooke</h4>
          </div>
           <div className="banner6"><img className="d-block"
          src="Image/img-2.jpg" alt=""/></div>
          <div className="card" id="doctor3" style={{width:'195px', height:'80px'}}>
          <h6>Dermatologist</h6>
            <hr/>
            <h4>Daniel Hale</h4>
          </div>
    </div>

{/* --section5-- */}
    
    <div className="section" id="section5">
    <div className="img1"><img
          className="d-block"
          src="image/ptn-bg.jpg"
          alt=""/>    </div>
        <section id="scroll">
      <div className="reveal">
    
    <h1>Latest News</h1>
<img src="image/hr-brian-litzinger-one.png" id="hr6" alt=""/>

    {/* <h2>Caption</h2> */}
    <div class="text-container">
      <div class="text-box">
        <h3 style={{color: '#235f63'}}>All Challenge</h3>
        <p style={{color: '#235f63'}}>
        More than 7000 join the 4th edition of Walk the Talk in Geneva: 
        Health for All Challenge.
        </p>
      </div>
      <div class="text-box">
        <h3 style={{color: '#235f63'}}>World Health Assembly-Country</h3>
        <p style={{color: '#235f63'}}>
        Seventy-sixth World Health Assembly-Country 
        delegates considered a number of emergencies-related items today, as Items 14 and
         parts of item 15 were grouped together.
        </p>
      </div>
      <div class="text-box">
        <h3 style={{color: '#235f63'}}>report charts</h3>
        <p style={{color: '#235f63'}}>
        Landmark report charts route for reorienting economies to deliver health for all.
        </p>
      </div>
    </div>
  </div>
  
</section>
<div className="banner1"><img className="d-block"
          src="Image/1-virus.gif" alt=""/></div>
          
    </div>
    </div>

        </>
    )
}
export default Home