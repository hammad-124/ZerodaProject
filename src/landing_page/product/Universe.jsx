import React from "react";
function Universe() {
    return ( 
        <> 
        <div className="conatainer text-center">
            <div className="row">
                <p className="mb-5">Want to know more about our technology stack? Check out our Zerodh tech blog.</p>
                <h1>The Zerodha Universe</h1>
                <p className="mt-3 mb-5">  Extend your trading and investment experience even further with our
                partner platforms</p>
                <div className="col-4 p-3 mt-3">
                    <img src="images/smallcaseLogo.png" alt=""style={{width:"160px"}} />
                    <p className="text-small text-muted">Thematic investment platform</p>

                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="images/streakLogo.png" style={{width:"160px"}} alt="" />
                    <p className="text-small text-muted">Algo $ strategy platform</p>

                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="images/sensibullLogo.svg" style={{width:"160px"}} alt="" />
                    <p className="text-small text-muted">Options Trading platform</p>

                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="images/zerodhaFundhouse.png" style={{width:"160px"}} alt="" />
                    <p className="text-small text-muted">Asset management</p>

                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="images\goldenpiLogo.png"  style={{width:"160px"}}alt="" />
                    <p className="text-small text-muted">Bonds Trading platform</p>

                </div>
                <div className="col-4 p-3 mt-3">
                    <img src="images/dittoLogo.png"style={{width:"140px"}} alt="" />
                    <p className="text-small text-muted">Insurance platform</p>

                    
                </div>

            </div>
            <button className='p-2 btn btn-primary mt-5 mb-5' style={{width:"25%",margin :"0 auto"}}>Signup Now</button>

        </div>
        </>
        
     );
}

export default Universe;