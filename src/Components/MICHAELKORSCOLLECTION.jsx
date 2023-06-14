import React, { Component } from "react";
import image5 from "/assets/image5.png";
import image6 from "/assets/image6.png";
import image15 from "/assets/image15.png";
import image16 from "/assets/image16.png";
import "/src/styles.css";
import ProductDescription from "./ProductDescription";
import ProductDescriptionShoes from "./ProductDescriptionShoes";

export default class MICHAELKORSCOLLECTION extends Component {
  constructor() {
    super();
    this.state = {
      isHovered1: true,
      isHovered2: false
    };
  }

  handleMouseEnter1 = () => {
    this.setState({
      isHovered1: false
    });
  };

  handleMouseLeave1 = () => {
    this.setState({
      isHovered1: true
    });
  };

  handleMouseEnter2 = () => {
    this.setState({
      isHovered2: true
    });
  };

  handleMouseLeave2 = () => {
    this.setState({
      isHovered2: false
    });
  };

  render() {
    const { isHovered1, isHovered2 } = this.state;

    return (
      <div className="row">
        <div className="col-lg-6">
          <img
            className="hoverImage mx-5 p-5"
            src={isHovered1 ? image6 : image5}
            alt="HoveringEffect"
            onMouseEnter={this.handleMouseEnter1}
            onMouseLeave={this.handleMouseLeave1}
          />
        </div>
        <div className="col-lg-6">
          <ProductDescription />
        </div>
        <div className="col-lg-6 p-5">
          <ProductDescriptionShoes />
        </div>
        <div className="col-lg-6">
          <img
            className="hoverImage"
            src={isHovered2 ? image16 : image15}
            alt="HoveringEffect"
            onMouseEnter={this.handleMouseEnter2}
            onMouseLeave={this.handleMouseLeave2}
          />
        </div>
      </div>
    );
  }
}
