import { Component } from "react";

class FeatureItem extends Component {
  state = {
    feature: {
      imgAlt: "feature image",
    },
  };
  changeImg = () => {};

  render() {
    return (
      <section className="featureItem-section">
        <div className="img-container">
          <img
            src={`/images/features/${this.props.imgSrc}.png`}
            alt={this.state.feature.imgAlt}
          />
        </div>

        <div className="featureText-container">
          <h4>{this.props.heading}</h4>
          <p>{this.props.description}</p>
        </div>
      </section>
    );
  }
}

export default FeatureItem;
