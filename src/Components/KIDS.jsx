import React, { useState } from "react";
import image4 from "/assets/image4.png";
import image7 from "/assets/image7.png";
import image8 from "/assets/image8.png";
import "/src/styles.css";

const KIDS = () => {
  const [counts, setCounts] = useState([0, 0, 0]);

  const increase = (index) => {
    const updatedCounts = [...counts];
    updatedCounts[index] = updatedCounts[index] + 1;
    setCounts(updatedCounts);
  };

  const decrease = (index) => {
    if (counts[index] > 0) {
      const updatedCounts = [...counts];
      updatedCounts[index] = updatedCounts[index] - 1;
      setCounts(updatedCounts);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-4">
        <div style={{ margin: "60px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={image4} className="image1 card mx-5" alt="image4" />{" "}
            </div>
            <div className="row align-items-center border mx-5">
              <div className="col-auto">
                <div
                  className="btn custom-btn-add fs-2 fw-bold"
                  onClick={() => increase(0)}
                >
                  +
                </div>
              </div>
              <div className="col-auto">
                <div className="count fw-bold fs-4">{counts[0]}</div>
              </div>
              <div className="col-auto">
                <div
                  className="btn custom-btn-remove fs-2 fw-bold"
                  onClick={() => decrease(0)}
                >
                  -
                </div>
              </div>
            </div>
          </div>
          <div className="card-title mx-5 mt-3">
            MICHAEL KORS KIDS
            <p>Metallic Pleated Midi Skirt</p>
            <pre>&#x20b9; 9,000</pre>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div style={{ margin: "60px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={image7} className="image1 card mx-5" alt="image7" />{" "}
            </div>
            <div className="row align-items-center border mx-5">
              <div className="col-auto">
                <div
                  className="btn custom-btn-add fs-2 fw-bold"
                  onClick={() => increase(1)}
                >
                  +
                </div>
              </div>
              <div className="col-auto">
                <div className="count fw-bold fs-4">{counts[1]}</div>
              </div>
              <div className="col-auto">
                <div
                  className="btn custom-btn-remove fs-2 fw-bold"
                  onClick={() => decrease(1)}
                >
                  -
                </div>
              </div>
            </div>
          </div>
          <div className="card-title mx-5 mt-3">
            MICHAEL KORS KIDS
            <p>Chain Embellished Denim Jacket</p>
            <pre>&#x20b9; 16,000</pre>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div style={{ margin: "60px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={image8} className="image1 card mx-5" alt="image8" />{" "}
            </div>
            <div className="row align-items-center border mx-5">
              <div className="col-auto">
                <div
                  className="btn custom-btn-add fs-2 fw-bold"
                  onClick={() => increase(2)}
                >
                  +
                </div>
              </div>
              <div className="col-auto">
                <div className="count fw-bold fs-4">{counts[2]}</div>
              </div>
              <div className="col-auto">
                <div
                  className="btn custom-btn-remove fs-2 fw-bold"
                  onClick={() => decrease(2)}
                >
                  -
                </div>
              </div>
            </div>
          </div>
          <div className="card-title mx-5 mt-3">
            MICHAEL KORS KIDS
            <p>Stretch Cotton Sequined Logo Heart T-Shirt</p>
            <pre>&#x20b9; 5,000</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KIDS;
