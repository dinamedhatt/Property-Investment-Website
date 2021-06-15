import { Component } from "react";
import DividerItem from "./divider-item";

class Divider extends Component {
  state = {};
  render() {
    return (
      <section className="divider-section">
        <DividerItem
          number="1"
          subHeader="RESEARCH"
          header="Define your criteria"
          imgSrc="1"
        />
        <hr />
        <DividerItem
          number="2"
          subHeader="SOURCE"
          header="Setup property alerts"
          imgSrc="2"
        />
        <hr />
        <DividerItem
          number="3"
          subHeader="EVALUATE"
          header="Compute custom ROI"
          imgSrc="3"
        />
      </section>
    );
  }
}
export default Divider;
