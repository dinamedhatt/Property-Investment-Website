import { Component } from "react";
import FeatureItem from "./feature-item";
import Retirement from "./retirement";

class Features extends Component {
  state = {};
  changeImg = () => {};

  render() {
    return (
      <section>
        <FeatureItem imgSrc="1" heading="Powerfull filters" />
        <FeatureItem imgSrc="2" heading="Matching property alerts" />
        <FeatureItem imgSrc="3" heading="Local area report" />
        <Retirement />
        <FeatureItem imgSrc="4" heading="Return-on-Investment" />
        <FeatureItem imgSrc="5" heading="Heatmap data overlays" />
        <FeatureItem imgSrc="6" heading="Genie Score" />
        <FeatureItem
          imgSrc="7"
          heading="Local amenities and project applications"
        />
        <FeatureItem imgSrc="8" heading="Area ranking" />
      </section>
    );
  }
}

export default Features;
