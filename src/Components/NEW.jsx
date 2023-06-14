import React, { useState } from "react";
import image1 from "/assets/image1.jpg";
import image14 from "/assets/image14.png";
import image18 from "/assets/image18.png";
import "/src/styles.css";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      counts: {
        image1: 0,
        image14: 0,
        image16: 0
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
                <img src={image1} className="image1 card mx-5" alt="image1" />
              </div>
              <div className="row align-items-center border mx-5">
                <div className="col-auto">
                  <div
                    className="btn custom-btn-add fs-2 fw-bold"
                    onClick={() => this.increase("image1")}
                  >
                    +
                  </div>
                </div>
                <div className="col-auto">
                  <div className="count fw-bold fs-4">{counts.image1}</div>
                </div>
                <div className="col-auto">
                  <div
                    className="btn custom-btn-remove fs-2 fw-bold"
                    onClick={() => {
                      const count = Math.max(0, counts.image1 - 1);
                      this.setState({ counts: { ...counts, image1: count } });
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="card-title mx-5 mt-3">
              MICHAEL MICHAEL KORS
              <p>Hamilton Legacy Large Leather Belted Satchel</p>
              <pre>&#x20b9; 67,000</pre>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div style={{ margin: "60px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={image14} className="image1 card mx-5" alt="image14" />
              </div>
              <div className="row align-items-center border mx-5">
                <div className="col-auto">
                  <div
                    className="btn custom-btn-add fs-2 fw-bold"
                    onClick={() => this.increase("image14")}
                  >
                    +
                  </div>
                </div>
                <div className="col-auto">
                  <div className="count fw-bold fs-4">{counts.image14}</div>
                </div>
                <div className="col-auto">
                  <div
                    className="btn custom-btn-remove fs-2 fw-bold"
                    onClick={() => {
                      const count = Math.max(0, counts.image14 - 1);
                      this.setState({ counts: { ...counts, image14: count } });
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="card-title mx-5 mt-3">
              MICHAEL MICHAEL KORS
              <p>Hamilton Legacy Large Leather Belted Satchel</p>
              <pre>&#x20b9; 67,000</pre>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div style={{ margin: "60px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={image18} className="image1 card mx-5" alt="image16" />
              </div>
              <div className="row align-items-center border mx-5">
                <div className="col-auto">
                  <div
                    className="btn custom-btn-add fs-2 fw-bold"
                    onClick={() => this.increase("image16")}
                  >
                    +
                  </div>
                </div>
                <div className="col-auto">
                  <div className="count fw-bold fs-4">{counts.image16}</div>
                </div>
                <div className="col-auto">
                  <div
                    className="btn custom-btn-remove fs-2 fw-bold"
                    onClick={() => {
                      const count = Math.max(0, counts.image16 - 1);
                      this.setState({ counts: { ...counts, image16: count } });
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="card-title mx-5 mt-3">
              MICHAEL MICHAEL KORS
              <p>Hamilton Legacy Micro Leather Belted Crossbody Bag</p>
              <pre>&#x20b9; 25,000</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
