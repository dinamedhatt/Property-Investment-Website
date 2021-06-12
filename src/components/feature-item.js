import { Component } from "react";

class FeatureItem extends Component {
  state = {
    feature: {
      imgAlt: "feature image",
      heading: "Powerfull filters",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
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
          <p>{this.state.feature.description}</p>
        </div>
      </section>
    );
  }
}

export default FeatureItem;
