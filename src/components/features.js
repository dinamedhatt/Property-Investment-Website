import { Component } from "react";
import FeatureItem from "./feature-item";
import Retirement from "./retirement";
import Sponsors from "./sponsors";
import DealSection from "./deal-section";
import { Table } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { IconContext } from "react-icons";
// import { SteppedLineTo } from "react-lineto";
class Features extends Component {
  state = {};
  changeImg = () => {};

  render() {
    return (
      <section>
        <div className="features mt-5 ">
          <h1 className="heading-one ">Features</h1>
          <p className=" mt-2 row col-8 offset-2 col-xl-4 offset-xl-4  col-sm-6 offset-sm-3 mb-5">
            We have chosen the features that give you an edge over the
            traditional real estate investors while keeping things extremely
            simple. See for yourself!
          </p>

          <div className="feature-img-container">
            <img
              className="feature-icon feature-icon1"
              src="images/features/icon1.png"
              alt="icon"
            />

            <img
              className="feature-icon feature-icon2"
              src="images/features/icon2.png"
              alt="icon"
            />

            <img
              className="feature-img row col-10 offset-1 col-xl-6 offset-xl-3  col-lg-8 offset-lg-2 pt-5"
              src="images/features/features-img.png"
              alt="Features"
            />
            {/* 
            <SteppedLineTo
              from="feature-img"
              fromAnchor="25% 50%"
              to="feature-icon1"
              orientation="h"
              borderColor="#C4C4C4"
            />
            <SteppedLineTo
              from="feature-img"
              fromAnchor="75% 50%"
              to="feature-icon2"
              orientation="h"
              borderColor="#C4C4C4"
            /> */}
          </div>
        </div>
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

          <Table borderless className="feature-comparision-table">
            <thead>
              <tr>
                <th className="feature-table-heading">&nbsp;</th>
                <th className="feature-table-heading">Property Deal Genie</th>
                <th className="feature-table-heading">Others</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Time to start</td>
                <td>Immediatelly</td>
                <td>After a few hours of training</td>
              </tr>
              <tr>
                <td>Ease of use</td>
                <td>
                  <IconContext.Provider
                    value={{ className: "top-react-icons" }}
                  >
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </IconContext.Provider>
                </td>
                <td>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                </td>
              </tr>
              <tr>
                <td>Property metrics</td>
                <td>Up to 50</td>
                <td>34 and counting</td>
              </tr>

              <tr>
                <td>Heatmap overlays</td>
                <td>All metrics</td>
                <td>Partially available</td>
              </tr>

              <tr>
                <td>Monthly fee</td>
                <td>From $20</td>
                <td>Above $100</td>
              </tr>
            </tbody>
          </Table>
        </section>

        <Sponsors />
        <DealSection />
      </section>
    );
  }
}

export default Features;