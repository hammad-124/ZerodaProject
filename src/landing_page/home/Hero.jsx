import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="images/homeHero.png" alt="HomeImage" className='mb-3' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online plateform to invest in stocks,derivative,mutual funds and more.</p>
                <button className='p-2 btn btn-primary mb-5' style={{width:"25%",margin :"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;