import React from "react";
import Data from "/src/Data/handbag.json";
import "/src/styles.css";

const HANDBAGS = () => {
  const MKBags = (bags) => {
    return (
      <div className="col-lg-4">
        <div style={{ margin: "60px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div key={bags.id}>
              <img className="image1 card" src={bags.path} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="card-title  mt-3 ">
              {bags.product}
              <p>{bags.productDesc}</p>
              <pre>&#x20b9; {bags.productPrice}</pre>
            </div>
            <button type="button" className="add-to-bag text-uppercase">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div>
        <center>
          <p className="text-uppercase handbags mt-4  ">All Handbags</p>
        </center>
        <div className="row">{Data.map(MKBags)}</div>
      </div>
    </>
  );
};
export default HANDBAGS;
