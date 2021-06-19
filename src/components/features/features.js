import { Component } from "react";
import FeatureItem from "./feature-item";
import Retirement from "../retirement";
import Sponsors from "../sponsors";
import DealSection from "../deal-section";
import { Table } from "react-bootstrap";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { IconContext } from "react-icons";
import RelyData from "../rely-data/rely-data";
class Features extends Component {
  state = {};

  render() {
    return (
      <section>
        <div className="text-center mt-5 ">
          <h1 className="heading-one">Features</h1>
          <p className=" mt-2 row col-8 offset-2 col-xl-4 offset-xl-4  col-sm-6 offset-sm-3">
            We have chosen the features that give you an edge over the
            traditional real estate investors while keeping things extremely
            simple. See for yourself!
          </p>
          <div style={{ overflow: "hidden" }}>
            <div className="feature-img-container">
              <div className="feature-icon1 ">
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

              <div className="feature-icon2 ">
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
            </div>
          </div>
        </div>
        <FeatureItem
          imgSrc="1"
          heading="Powerfull filters"
          description="if you decide the kind of property investment you can use filtration to find quickly and easily the results that match with your requirement and budget"
        />
        <FeatureItem
          imgSrc="2"
          heading="Matching property alerts"
          description="we will help you by sending alert all the matched property with your requirement and your budget to choose what is suitable with you"
        />
        <FeatureItem
          imgSrc="3"
          heading="Local area report"
          description="when you tell us the kind of property investment and the location that will start investment there we will send report contain all similar investment in this location and if this investment success or no"
        />
        <Retirement />
        <FeatureItem
          imgSrc="4"
          heading="Return-on-Investment"
          description="we will help you to build your investment, we will create a bespoke investment plan based on your requirements
then you will receive notification  receive the monthly cash flow, equity and future increase in value for each of the properties."
        />
        <FeatureItem
          imgSrc="5"
          heading="Heatmap data overlays"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
        />
        <FeatureItem
          imgSrc="6"
          heading="Genie Score"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
        />
        <FeatureItem
          imgSrc="7"
          heading="Local amenities and project applications"
          description="if you decided what kind of investment you want but don't know the procees to finish it we also will help you to  manage the legal process, the mortgage, refurbishment and lettings."
        />
        <FeatureItem
          imgSrc="8"
          heading="Area ranking"
          description="we will help your investment to make it more successful by suggesting the best location suitable for your investment or suggest the kind of investment that is suitable for your location "
        />

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
