import React from "react";
function Rightimage({
    imageUrl,
  productTitle,
  productDescription,
  loadMoreLink,
}) {
    return ( 
        <div className="conatainer border-top">
    <div className="row p-5">
        
        <div className="col-6 p-5">
            <h1 style={{marginTop :"75px"}}>{productTitle}</h1>
            <p className="fs-7">{productDescription}</p>
            <div className="mb-4">
            <a href={loadMoreLink} style={{marginLeft:"20px",textDecoration:"none"}}> Loadmore <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>

        <div className="col-6">
            <img src={imageUrl} alt="imago" />
        </div>
    </div>
  </div>
     );
}

export default Rightimage;