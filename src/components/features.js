import { Component } from "react";
import FeatureItem from "./feature-item";
import Retirement from "./retirement";
import Sponsors from "./sponsors";
import DealSection from "./deal-section";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { IconContext } from "react-icons";
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

        <section className="feature-comparision-section">
          <div className="feature-text-container">
            <p>Not yet convinced?</p>
            <p>Property Deal Genie</p>
            <p>vs. others</p>
          </div>

          <div className="feature-comparision-table">
            <div className="feature-table-part">
              <h4 className="feature-table-heading">&nbsp;</h4>
              <div className="feature-table-points">
                <p>Time to start</p>
                <p>Ease of use</p>
                <p>Property metrics</p>
                <p>Heatmap overlays</p>
                <p>Monthly fee</p>
              </div>
            </div>

            <div className="feature-table-part">
              <h4 className="feature-table-heading">Property Deal Genie</h4>
              <div className="feature-table-points">
                <p>Immediatelly</p>
                <p>
                  <IconContext.Provider
                    value={{ className: "top-react-icons" }}
                  >
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </IconContext.Provider>
                </p>
                <p>34 and counting</p>
                <p>All metrics</p>
                <p>From $20</p>
              </div>
            </div>

            <div className="feature-table-part">
              <h4 className="feature-table-heading">Others</h4>
              <div className="feature-table-points">
                <p>After a few hours of training</p>
                <p>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                </p>
                <p>Up to 50</p>
                <p>Partially available</p>
                <p>Above $100</p>
              </div>
            </div>
          </div>
        </section>

        <Sponsors />
        <DealSection />
      </section>
    );
  }
}

export default Features;
