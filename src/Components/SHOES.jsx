import React, { useState } from "react";
import "/src/styles.css";
import Shoes from "/src/Data/shoes.json";

export default function SHOES() {
  const [showFilteredShoes, setShowFilteredShoes] = useState(true);
  const [filterPrice, setFilterPrice] = useState("");

  const handleClick = () => {
    setShowFilteredShoes(true);
  };

  const handleFilterChange = (event) => {
    setFilterPrice(event.target.value);
  };

  const filteredShoes = Shoes.filter((shoe) => {
    if (filterPrice === "<20000") {
      return parseInt(shoe.productPrice.replace(",", "")) < 20000;
    } else if (filterPrice === ">20000") {
      return parseInt(shoe.productPrice.replace(",", "")) > 20000;
    }
    return true;
  });

  return (
    <div>
      <p className="text-uppercase handbags mt-4 text-center fw-lighter  ">
        View All Designer Shoes
      </p>
      <div className="text-center">
        <select
          className="filter text-uppercase border-0 otuline-0"
          value={filterPrice}
          onChange={handleFilterChange}
        >
          <option value="">Featured</option>
          <option value="<20000">{"<20000"}</option>
          <option value=">20000">{">20000"}</option>
        </select>
      </div>
      <div className="row">
        {showFilteredShoes && (
          <>
            {filteredShoes.map((filteredShoe, index) => {
              return (
                <div key={index} className="col-lg-4">
                  <div className="shoe-item">
                    <img
                      className="image1 card mx-5 mt-5"
                      src={filteredShoe.path}
                      alt="Shoe"
                    />
                    <div className="row">
                      <div className="card-title mx-5 mt-3">
                        {filteredShoe.product}
                        <p> {filteredShoe.productDesc} </p>
                        <pre> &#x20b9; {filteredShoe.productPrice} </pre>
                        <button
                          type="button"
                          className="add-to-bag text-uppercase"
                        >
                          ADD TO BAG
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
