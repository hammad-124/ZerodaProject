import React from "react";
function Hero() {
  return (
    <>
      <div className="container p-5 text-center mt-5">
        <div className="row">
          <h1>
            <b>Pricing</b>
          </h1>
          <h5 className="p-2 fs-7 text-muted mb-5">
            Free equity investments and flat 20 traday and F&O trades
          </h5>
        </div>
        <div className="container border-top mt-3">
          <div className="row">
            <div className="col-4 p-4">
              <img src="images/pricingEquity.svg" alt="" />
              <h2>Free Equity Delivery</h2>
              <p className="text-muted">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>
            <div className="col-4 p-4">
              <img src="images/intradayTrades.svg" alt="" />
              <h2>Intraday and F&O trades</h2>
              <p className="text-muted">
                Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
              </p>
            </div>
            <div className="col-4 p-4">
              <img src="images/pricingEquity.svg" alt="" />
              <h2>Free direct MF</h2>
              <p className="text-muted">
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
