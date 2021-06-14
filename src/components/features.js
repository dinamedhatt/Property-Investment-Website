import { Component } from "react";
import FeatureItem from "./feature-item";
import Retirement from "./retirement";
import Sponsors from "./sponsors";
import DealSection from "./deal-section";
import { Table } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { IconContext } from "react-icons";
import RelyData from "./rely-data";
// import { SteppedLineTo } from "react-lineto";
class Features extends Component {
  state = {};

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
            <div className="feature-icon1">
              <img
                className="feature-icon"
                src="images/features/icon1.png"
                alt="icon"
              />
              <p>
                ROI <br /> COMPUTATION
              </p>
              <svg
                version="1.1"
                baseProfile="full"
                width="400"
                height="250"
                xlmns="http://www/w3/org/2000/svg"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100"
                  style={{ stroke: "#C4C4C4", strokeWidth: "8px" }}
                />
                <line
                  x1="0"
                  y1="100"
                  x2="115"
                  y2="100"
                  style={{ stroke: "#C4C4C4", strokeWidth: "2px" }}
                />
              </svg>
            </div>

            <div className="feature-icon2">
              <svg
                version="1.1"
                baseProfile="full"
                width="400"
                height="250"
                xlmns="http://www/w3/org/2000/svg"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100"
                  style={{ stroke: "#2B59B4", strokeWidth: "8px" }}
                />
                <line
                  x1="0"
                  y1="100"
                  x2="115"
                  y2="100"
                  style={{ stroke: "#2B59B4", strokeWidth: "2px" }}
                />
              </svg>
              <img
                className="feature-icon"
                src="images/features/icon2.png"
                alt="icon"
              />
              <p>
                DEAL <br /> ALERTS
              </p>
            </div>

            <img
              className="feature-img row col-10 offset-1 col-xl-6 offset-xl-3  col-lg-8 offset-lg-2 pt-5"
              src="images/features/features-img.png"
              alt="Features"
            />

            {/* <SteppedLineTo
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

          <div className="feature-comparision-container">
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
          </div>
        </section>

        <RelyData />
        <Sponsors />
        <DealSection />
      </section>
    );
  }
}

export default Features;
