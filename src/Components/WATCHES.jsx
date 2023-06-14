import React from "react";
import axios from "axios";
import "../styles.css";

class Profile extends React.Component {
  state = { watch: [] };

  componentDidMount() {
    axios
      .get("./watches.json")
      .then((res) => {
        this.setState({ watch: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const watches = this.state.watch.map((watch, index) => (
      <div className="col-lg-4">
        <div style={{ margin: "60px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div key={watch.id}>
              <img className="image1 card" src={watch.path} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="card-title  mt-3 ">
              {watch.product}
              <p>{watch.productDesc}</p>
              <pre>&#x20b9; {watch.productPrice}</pre>
            </div>
            <button type="button" className="add-to-bag text-uppercase">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    ));

    return <div className="row">{watches}</div>;
  }
}

export default Profile;
