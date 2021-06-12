import { Component } from "react";

class FeatureItem extends Component {
  state = {
    feature: {
      img: "./../../public/images/features/1.png",
      //   img: "D:iti/0 Graduation ProjectProperty-Investment-Websitepublicimages/features/1.png",
    },
  };
  //   isChecked = (event) => {
  //     console.log(this.state.feature.img);
  //   };

  render() {
    return (
      <section className="featureItem-section">
        <img src={this.state.feature.img} alt="feature img 1" />
      </section>
    );
  }
}

export default FeatureItem;
