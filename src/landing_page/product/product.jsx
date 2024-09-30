import React from "react";
import Hero from "./Hero";
import Leftimage from "./Leftimage";
import Rightimage from "./Rightimage";
import Universe from "./Universe";

function Product() {
  return (
    <>
      <Hero />
      <Leftimage
        imageUrl="images/kite.png"
        productTitle="Kite"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        trydemoLink=""
        loadMoreLink=""
        googlPlaystore=""
        applePlaystore=""
      />
      <Rightimage
       imageUrl="images/console.png"
       productTitle="Console"
       productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
       loadMoreLink="" />
      <Leftimage
        imageUrl="images/coin.png"
        productTitle="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemoLink=""
        loadMoreLink=""
        googlPlaystore=""
        applePlaystore=""
      />
      <Rightimage
      imageUrl="images/kiteconnect.png"
      productTitle="Kite Connect Api"
      productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      loadMoreLink="" />
      
      <Leftimage
        imageUrl="images/varsity.png"
        productTitle="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemoLink=""
        loadMoreLink=""
        googlPlaystore=""
        applePlaystore=""
      />
      <Universe />
      
    </>
  );
}

export default Product;
