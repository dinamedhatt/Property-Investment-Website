import { Component } from "react";

class FeatureItem extends Component {
  state = {
    feature: {
      //img: "../../public/images/features/1.png",
      imgSrc: "1",
      imgAlt: "hi",
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
          src={`/images/features/${this.state.feature.imgSrc}.png`}
          //src="/images/features/1.png"
          alt={this.state.feature.imgAlt}
        />
       </div>

       <div className="featureText-container">
        <h4>{this.state.feature.heading}</h4>
        <p>{this.state.feature.description}</p>
       </div>
      </section>
    );
  }
}

export default FeatureItem;
