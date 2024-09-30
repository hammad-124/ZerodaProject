import React from "react";

function Hero() {
  return (
    <>
      <div className="container p-5">
        <div className="row text-center p-5">
          <h1 className="fs-4">
           <b> We pioneered the discount broking model in Pakistan
            <br />
            Now, we are breaking ground with our technology.</b>
          </h1>
        </div>
      </div>

      <div className="container p-5 border-top">
        <div className="row  p-5" style={{lineHeight:"1.8"}}>
            <div className="col-6 fs-7 p-3">
            <p className="text-muted">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="text-muted">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="text-muted">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
            </div>
            <div className="col-6 fs-7 p-3">

            <p className="text-muted">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="text-muted">
            <a href="#" style={{textDecoration:"none"}}>Rainmatter</a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="text-muted">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
            </div>
         
        </div>
      </div>
    </>
  );
}

export default Hero;
