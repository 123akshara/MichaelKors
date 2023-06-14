import React from "react";
import image3 from "/assets/image3.jpg";
import image10 from "/assets/image10.jpg";
import image11 from "/assets/image11.png";
import "/src/styles.css";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      counts: {
        image3: 0,
        image10: 0,
        image11: 0
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
                <img src={image3} className="image1 card mx-5" alt="image3" />
              </div>
              <div className="row align-items-center border mx-5">
                <div className="col-auto">
                  <div
                    className="btn custom-btn-add fs-2 fw-bold"
                    onClick={() => this.increase("image3")}
                  >
                    +
                  </div>
                </div>
                <div className="col-auto">
                  <div className="count fw-bold fs-4">{counts.image3}</div>
                </div>
                <div className="col-auto">
                  <div
                    className="btn custom-btn-remove fs-2 fw-bold"
                    onClick={() => {
                      const count = Math.max(0, counts.image3 - 1);
                      this.setState({ counts: { ...counts, image3: count } });
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
                <img src={image11} className="image1 card mx-5" alt="image11" />
              </div>
              <div className="row align-items-center border mx-5">
                <div className="col-auto">
                  <div
                    className="btn custom-btn-add fs-2 fw-bold"
                    onClick={() => this.increase("image11")}
                  >
                    +
                  </div>
                </div>
                <div className="col-auto">
                  <div className="count fw-bold fs-4">{counts.image11}</div>
                </div>
                <div className="col-auto">
                  <div
                    className="btn custom-btn-remove fs-2 fw-bold"
                    onClick={() => {
                      const count = Math.max(0, counts.image11 - 1);
                      this.setState({ counts: { ...counts, image11: count } });
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="card-title mx-5 mt-3">
              MICHAEL MICHAEL KORS
              <p>Pintucked Linen and Cotton Blend Pants</p>
              <pre>&#x20b9; 17,000</pre>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div style={{ margin: "60px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={image10} className="image1 card mx-5" alt="image10" />
              </div>
              <div className="row align-items-center border mx-5">
                <div className="col-auto">
                  <div
                    className="btn custom-btn-add fs-2 fw-bold"
                    onClick={() => this.increase("image10")}
                  >
                    +
                  </div>
                </div>
                <div className="col-auto">
                  <div className="count fw-bold fs-4">{counts.image10}</div>
                </div>
                <div className="col-auto">
                  <div
                    className="btn custom-btn-remove fs-2 fw-bold"
                    onClick={() => {
                      const count = Math.max(0, counts.image10 - 1);
                      this.setState({ counts: { ...counts, image10: count } });
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="card-title mx-5 mt-3">
              MICHAEL MICHAEL KORS
              <p>Linen Shirt</p>
              <pre>&#x20b9; 14,000</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
