import React from 'react';
function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className="col-6  p-5"><img src="images/largestBroker.svg" alt="img" /></div>
                <div className="col-6 p-5">
                    <h1 className='mb-4'>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of
                        all retail order volumes in Pakistan daily by trading and investing in:
                    </p>
                    
                   <div className="row">
                    <div className="col-6">
                    <ul>
                        <li className='p-1'>Future and Options</li>
                        <li className='p-1'>Commodity derivatives</li>
                        <li className='p-1'>Currency derivatives</li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                    <li className='p-1'>Stocks & IPOs</li>
                        <li className='p-1'>Direct mutual funds</li>
                        <li className='p-1'>Bonds and Govt.securities</li>
                    </ul>
                    </div>
                    
                   </div>
                   <img src="images/pressLogos.png" alt="pressImg" className='mt-5' style={{width:"90%"}} />
                </div>
            </div>
        </div>
     );
}

export default Awards;