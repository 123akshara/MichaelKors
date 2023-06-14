import React from "react";
import "/src/styles.css";
import CollectionShoes from "/src/Data/collectionshoes.json";

const descriptionStyle = {
  fontFamily: "Caslon",
  fontSize: 30,
  letterSpacing: 1
};

const designEvolution = {
  fontFamily: "Caslon",
  fontSize: 12,
  letterSpacing: 1
};

export default class ProductDescription extends React.Component {
  constructor() {
    super();
    this.state = { description: false };
    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription() {
    this.setState((prevState) => ({ description: !prevState.description }));
  }

  renderProductDescription(product) {
    return (
      <div className="mt-5 mx-2" key={product.id}>
        <h3 className="fs-4 ">{product.title}</h3>
        <h7 className="fs-5 ">{product.subtitle}</h7>
        <p className="mt-2 fs-6 " style={designEvolution}>
          {product.description}
        </p>
      </div>
    );
  }

  render() {
    const { description } = this.state;

    return (
      <>
        <h1 style={descriptionStyle} className="text-uppercase mt-5 me-5">
          A Lesson in dressing from the feet up, our trainers and satchels
          always pack a stylish punch
        </h1>
        {description ? (
          <>
            {CollectionShoes.map((product) =>
              this.renderProductDescription(product)
            )}
            <button
              className="designStory mt-2 fw-bold"
              onClick={this.toggleDescription}
            >
              Hide Story
            </button>
          </>
        ) : (
          <div>
            <button
              className="designStory mt-2 fw-bold"
              onClick={this.toggleDescription}
            >
              Design Story
            </button>
          </div>
        )}
      </>
    );
  }
}
