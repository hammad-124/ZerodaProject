import React from "react";
function Leftimage({
  imageUrl,
  productTitle,
  productDescription,
  trydemoLink,
  loadMoreLink,
  googlPlaystore,
  applePlaystore,
}) {
  return(
  <div className="conatainer border-top">
    <div className="row p-5">
        <div className="col-6 p-5">
            <img src={imageUrl} alt="imago" />
        </div>
        <div className="col-6 p-5">
            <h1 style={{marginTop :"75px"}}>{productTitle}</h1>
            <p className="fs-7">{productDescription}</p>
            <div className="mb-4">
            <a href={trydemoLink} style={{textDecoration:"none"}} > TryDemo <i class="fa-solid fa-arrow-right" ></i></a>
            <a href={loadMoreLink} style={{marginLeft:"20px",textDecoration:"none"}}> Loadmore <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div>
            <a href={{googlPlaystore}}> <img src="images/googlePlayBadge.svg"/></a>
            <a href={{applePlaystore} }><img src="images/appstoreBadge.svg"/></a>
            </div>
            
            
        </div>
    </div>
  </div>
   ) ;
}

export default Leftimage;
