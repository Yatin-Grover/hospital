import React from 'react';
import '../css/Medicine.css'
import Bootstrapcarousel from "./Bootstrapcarousel";
import { Link } from "react-router-dom";
// import Payment from './Payment';
// import Payment from "./Payment";



function Medicine() {
  return (
    <>
    <Bootstrapcarousel/>
    <div className='container-fluid'>
    {/* --------section 1--------- */}

    <section id="medi">
    <div class="container">
  <div class="row row-cols-auto justify-content-center mt-5" id="">
    <div class="col-4">
     <h1>Medicine</h1>
    </div>
  </div> 
  
  <div class="row row-cols-auto mt-5" id="view1">
  <div class="row bootstrap snippets bootdey">
    <div class="col-md-4">
        <div class="team-member">
            <figure class="effect-zoe">
                <div class="team-photo">
                    <img src="image/download.jpg" alt="Rachel James Johnes" class="img-responsive"/>
                </div>
                <div class="team-attrs">
                    <div class="team-name font-accident-two-bold-italic">Paracetamol</div>
                    <div class="team-position">Enzopol-p</div>
                </div>
                <div class="team-content small">
                Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).
                </div>
                <figcaption>
                

                    <p class="phone-number">
                        <a href="#!">Order no. 179a68b868n</a>
                    </p>
                    <Link
                  > <button className="btn btn-warning">Purchase</button></Link>
                </figcaption>
            </figure>
        </div>
        <div class="dividewhite4"></div>


    </div>
  </div> 

  
</div> 
<div class="col-sm-4"><h4 id="para" class='text-box'>The concept of medicine home delivery has been taken to a new level by the PharmEasy online medicine delivery app. You can use the PharmEasy online medicine delivery app to browse through an extensive range of medicines. Each medicine undergoes a 3-step quality check.

Whatever be your medicine requirement, you are sure to locate it in this online pharmacy. All you have to do then is to add it to your cart and place the order and get your order delivered quickly. India’s beloved online medicine delivery app makes sure that you get your medicines in record time because we know how vital 
time is in any treatment. Sit back, and we will have all your medical necessities delivered to your doorstep.
Tired of walking all the way to your local medicine store? Worried that going out is risky during the current times? Order medicines online at PharmEasy, India’s trusted online medicine app. With more than 1 lakh medicines always in stock, you are sure to find what you are looking for, and that too at affordable prices!</h4></div>
</div>


    </section>

    
    </div>
    </>
  )
}


export default Medicine