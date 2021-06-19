import { Component } from "react";
import DividerItem from "./divider-item";

class Divider extends Component {
  state = {};
  render() {
    return (
      <section className="divider-component">
        <h3>How it works?</h3>

        <div className="divider-section ">
          <DividerItem
            number="1"
            subHeader="RESEARCH"
            header="Define your criteria"
            imgSrc="1"
            discribtion="We search for best investments using various on and off market methods conducting thorough analysis  to ensure a sound investment at a discounted price."
          />
          <hr />
          <DividerItem
            number="2"
            subHeader="SOURCE"
            header="Setup property alerts"
            imgSrc="2"
            discribtion="we will help you to build your investment, we will send a alert contain all property that match your requirements and your budget."
          />
          <hr />
          <DividerItem
            number="3"
            subHeader="EVALUATE"
            header="Compute custom ROI"
            imgSrc="3"
            discribtion="you can compute the ROI by monthly cash flow, equity and future increase in value for each of the properties in your portfolio."
          />
        </div>
      </section>
    );
  }
}
export default Divider;
