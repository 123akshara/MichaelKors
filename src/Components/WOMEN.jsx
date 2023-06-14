import React, { useState } from "react";
import image2 from "/assets/image2.jpg";
import image12 from "/assets/image12.png";
import image13 from "/assets/image13.png";
import "/src/styles.css";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      counts: {
        image2: 0,
        image12: 0,
        image13: 0
      }
    };
    this.increase = this.increase.bind(this);
  }

  increase(imageName) {
    const { counts } = this.state;
    const updatedCounts = { ...counts };
    updatedCounts[imageName] += 1;
    this.setState({ counts: updatedCounts });
  }

  render() {
    const { counts } = this.state;
    return (
      <div className="row">
        <div className="col-lg-4">
          <div style={{ margin: "60px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={image2} className="image1 card mx-5" alt="image2" />
              </div>
              <div className="row align-items-center border mx-5">
                <div className="col-auto">
                  <div
                    className="btn custom-btn-add fs-2 fw-bold"
                    onClick={() => this.increase("image2")}
                  >
                    +
                  </div>
                </div>
                <div className="col-auto">
                  <div className="count fw-bold fs-4">{counts.image2}</div>
                </div>
                <div className="col-auto">
                  <div
                    className="btn custom-btn-remove fs-2 fw-bold"
                    onClick={() => {
                      const count = Math.max(0, counts.image2 - 1);
                      this.setState({ counts: { ...counts, image2: count } });
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="card-title mx-5 mt-3">
              MICHAEL MICHAEL KORS
              <p>Slim-Fit Linen Shirt</p>
              <pre>&#x20b9; 14,000</pre>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div style={{ margin: "60px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={image12} className="image1 card mx-5" alt="image12" />
              </div>
              <div className="row align-items-center border mx-5">
                <div className="col-auto">
                  <div
                    className="btn custom-btn-add fs-2 fw-bold"
                    onClick={() => this.increase("image12")}
                  >
                    +
                  </div>
                </div>
                <div className="col-auto">
                  <div className="count fw-bold fs-4">{counts.image12}</div>
                </div>
                <div className="col-auto">
                  <div
                    className="btn custom-btn-remove fs-2 fw-bold"
                    onClick={() => {
                      const count = Math.max(0, counts.image12 - 1);
                      this.setState({ counts: { ...counts, image12: count } });
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="card-title mx-5 mt-3">
              MICHAEL MICHAEL KORS
              <p>Zebra Print Cotton Lawn Cutout Dress</p>
              <pre>&#x20b9; 33,000</pre>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div style={{ margin: "60px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={image13} className="image1 card mx-5" alt="image13" />
              </div>
              <div className="row align-items-center border mx-5">
                <div className="col-auto">
                  <div
                    className="btn custom-btn-add fs-2 fw-bold"
                    onClick={() => this.increase("image13")}
                  >
                    +
                  </div>
                </div>
                <div className="col-auto">
                  <div className="count fw-bold fs-4">{counts.image13}</div>
                </div>
                <div className="col-auto">
                  <div
                    className="btn custom-btn-remove fs-2 fw-bold"
                    onClick={() => {
                      const count = Math.max(0, counts.image13 - 1);
                      this.setState({ counts: { ...counts, image13: count } });
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="card-title mx-5 mt-3">
              MICHAEL MICHAEL KORS
              <p>Ribbed Stretch Knit Tank Dress</p>
              <pre>&#x20b9; 28,000</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
