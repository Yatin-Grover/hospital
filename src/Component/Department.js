import React, { useState } from "react";
import '../css/Deparrtment.css'
import Bootstrapcarousel from "./Bootstrapcarousel";
import Accordion from 'react-bootstrap/Accordion'; 
import Menu from "./Menu.js"


const Department = () =>{

    const [items, setItems] = useState(Menu);

    const filterItem =(categItem) =>{
        const updatedItems = Menu.filter((curElem)=>{
        return curElem.category === categItem;
    });

    setItems(updatedItems);
    }
    return(
        <>
        <Bootstrapcarousel/>
        <div className="container-fluid">
            <div className="section" id="sectiong">
<h1 className="mt-3 text-center main-heading">Online Services</h1>
<img src="image/hr-brian-litzinger-one.png" alt="" id="hr1"/>
<div className="menu-tabs conatainer">
    <div className="menu-tab d-flex justify-content-around">
    <button className="btn btn-warning" onClick={()=>filterItem('Doctor')}>Doctor</button>
        <button className="btn btn-warning" onClick={()=>filterItem('Disease')}>Disease</button>
        <button className="btn btn-warning"onClick={()=>filterItem('Test Available')}>Test-avilable</button>
        <button className="btn btn-warning" onClick={()=>filterItem('Career')}>Career</button>
    </div>
</div>

<div className="menu-items contaner-fluid mt-1">
    <div className="row">
        <div className="col-11 mx-auto">
            <div className="row my-5">
                {
                    items.map((elem)=>{
                        const{name, image, description, price, contact} = elem;

                        return(
                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                        <div className="row item-inside">
                            <div className="col-12 col-, d-12 col-lg-4 img-div" >
                                <img src={image} alt={name} className="img-fluid"/>
                            </div>
                            <div className="col-12 col-md-12 col-lg-8" id="box">
                                <div className="main-title pt-4 pb-3">
                                <h2>{name}</h2>
                                <p>{description}</p>
                                </div>
                                <div className="menu-price-book">
                                    <div className="price-book-divide d-flex justify-content-between ">
                                        <h5>{price}</h5>
                                        {/* <a href="#">
                                        <button className="btn btn-primary">Contact Us</button></a> */}
                                    </div>
                                    <p id="conatact">{contact}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                    })
                }
                
            </div>
        </div>
    </div>
</div>



            </div>
        <div className="section" id="sectionx">
<h1>Department</h1>
<img src="image/hr-brian-litzinger-one.png" id="hr2" alt=""/>
        <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div class="card d-flex position-relative flex-column" id="carda">
            <div class='imgContainer'>
                <img src='image/intro-1680014357.jpg' alt=""/>
            </div>
            <div class="content">
                <h3>Orthopaedics</h3>
                <p> A surgeon who has special training in diagnosing and treating injuries and diseases of the musculoskeletal system. This includes the bones, joints.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column" id="carda">
            <div class='imgContainer'>
                <img src='image/a-neurologist-looking-at-a-brain-scan.jpg' alt=""/>
            </div>
            <div class="content">
                <h3>Neurology</h3>
                <p>A doctor who specializes in neurology is called a neurologist. The neurologist treats disorders that affect the brain, spinal cord, and nerves, such as: Cerebrovascular disease, such as stroke.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column" id="carda">
            <div class='imgContainer'>
                <img src='image/why-choose-a-full-service-emergency-room.jpg' alt=""/>
            </div>
            <div class="content">
                <h3>Emergency</h3>
                <p>a hospital room or area staffed and equipped for the reception and treatment of persons with conditions (as illness or trauma) requiring immediate medical care.</p>
            </div>
        </div>
        <div class="card d-flex position-relative flex-column" id="carda">
            <div class='imgContainer'>
                <img src='image/hpb-surgical-gastroenterology.png' alt=""/>
            </div>
            <div class="content">
                <h3>Gastrology</h3>
                <p>Gastroenterologists diagnose, treat and work to prevent gastrointestinal (stomach and intestines) and hepatological (liver, gallbladder, biliary tree and pancreas) diseases.</p>
            </div>
        </div>
    </div>

     <div class="accordion">
        <Accordion style={{width: '90%'}} id="accordion1">
      <Accordion.Item eventKey="0">
        <Accordion.Header id="item" class="bg-secondary">Other Departments-Intensive Care Unit (ICU)
        
        </Accordion.Header>
        <Accordion.Body>
          An intensive care unit (ICU) provides the critical care and life support for 
          acutely ill and injured patients. Unless you are an emergency admission, you will need a referral from your doctor or specialist to be admitted to ICU.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion style={{width: '90%'}} id="accordion1">
      <Accordion.Item eventKey="0">
        <Accordion.Header id="item" class="bg-secondary">Other Departments-Operation Theater
        
        </Accordion.Header>
        <Accordion.Body>
        Once the patient is positioned, the OR staff scrubs and dons sterile gowns, gloves, and masks.
         The patient is then draped, x-ray is moved in, and the surgeon comes into the room. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    </div>

        </div>
        </div>
        </>
    )
}
export default Department