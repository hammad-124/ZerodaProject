import React from 'react';
function Pricing () {
    return ( 
        <div className="container mb-3">
            <div className="row">
                <div className="col-4 p-3">
                    <h1 className='fs-2 mb-3'>Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency
                    in India. Flat fees and no hidden charges.</p>
                    <a href="#" style={{textDecorationLine: 'none'}}>See Pricing<i class="fa-solid fa-arrow-right"></i></a>

                </div>
                <div className="col-2"></div>
                <div className="col-6 mb-5">
                    <div className="row text-center">
                        <div className="col border p-3">
                            <h1 className='fs-2 mb-3'> Rs 0</h1>
                            <p>Free equity delivery and
                <br />
                direct mutual funds</p>
                        </div>
                        <div className="col border p-3 ">
                            <h1 className='fs-2 mb-3'>Rs 20</h1>
                        <p>Intraday and F&O</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing ;