import React from "react";


function Team() {
    return (  
       <>
        <div className="container p-5 border-top">
        <div className="row text-center">
          <h1 className="fs-1">
           <b> People </b>
          </h1>
        </div>
      </div>

      <div className="container p-3 mb-5">
        <div className="row p-3">
            <div className="col-6 text-center" >
                <img src="images/nithinKamath.jpg" alt="nithinKamath"style={{width:"50%",borderRadius:"100%"}} />
            
            <h4 className="mt-4 text-muted">NithinKamath</h4>
            <h6 className="text-muted">Fouder,CEO</h6>
            </div>
            <div className="col-6 p-3 fs-7">
            <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="#">HomePage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></p>

            </div>
        </div>
      </div>
       
       </>
    );
}

export default Team;
