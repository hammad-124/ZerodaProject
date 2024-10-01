import React from "react";

function Hero() {
    return ( 
        <section className="container-fluid" id="support-div">
      <div className=" p-5" id="support-wrap">
        <h4>Support portal</h4>
       <a href="">Track tickets</a>
       </div>
       <div className="row p-5 " style={{marginLeft : "130px" ,marginRight:"50px"}}>
        <div className="col-6">
        <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
        <input placeholder="Eg. how do I activate F&O"/>
        <br />
        <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6">
        <h1 className="fs-3">Featured</h1>
        <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>

       
      </div>
    </section>
     );
}

export default Hero;