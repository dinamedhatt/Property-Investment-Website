import { Component } from "react";
import JoinBtn from "../containers/join-btn";
import { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark";
import { NavLink } from "react-router-dom";
// import { GiCheckMark } from "react-icons/gi";

class Pricing extends Component {
  state = {
    checkedStatus: true,
    subscription: "yearly",
    savings: "30%",
  };

  isChecked = (event) => {
    this.setState({
      checkedStatus: event.target.checked,
      subscription: event.target.checked ? "Yearly" : "Monthly",
      savings: event.target.checked ? "30%" : "10%",
    });
  };

  render() {
    return (
      <section className="Pricing-section py-5">
        <h1 className="heading-one">Pricing</h1>
        <p className="col-10 offset-1">
          One plan, monthly or yearly payments. Try 14 days for free Dead simple
          like everything we do
        </p>
        <div className="row col-12 m-0">
          <div className="pricing-table2 col-xxl-4 col-lg-5 col-md-6 col-sm-7 col-8 mt-4 mx-5 "></div>
          <div className="pricing-table3 col-xxl-4 col-lg-5 col-md-6 col-sm-8 col-9 mt-4 mx-5 "></div>
        </div>
        <div className="pricing-table">
          <div className="start-heading">Start Now</div>

          <section className="points-section">
            <p>
              <span>
                <GiCheckMark />
              </span>
              All current and future features
            </p>
            <p>
              <span>
                <GiCheckMark />
              </span>
              Over 50 filter metric
            </p>
            <p>
              <span>
                <GiCheckMark />
              </span>
              Daily update
            </p>
            <p>
              <span>
                <GiCheckMark />
              </span>
              unlimited property alerts
            </p>
            <p>
              <span>
                <GiCheckMark />
              </span>
              Unlimited collections
            </p>
            <p>
              <span>
                <GiCheckMark />
              </span>
              15-day trial
            </p>
          </section>

          <section className="price-section">
            <div className="price-section-content">
              <p>Per month</p>
              <p>$20</p>
              <p>With yearly billing</p>

              <JoinBtn />
            </div>
          </section>
        </div>

        <section className="billing-section">
          <h4>Billing Period</h4>
          <div className="toggle-btn">
            <input
              // className="toggle-btn"
              type="checkbox"
              checked={this.state.checkedStatus}
              onChange={this.isChecked}
            ></input>
            <label>{this.state.subscription}</label>
          </div>

          <p>
            You save <span>{this.state.savings}</span> with the
            <span> {this.state.subscription} </span>
            plan
          </p>
        </section>

        <section className="check-feature-section">
          <p>Not yet convinced?</p>
          <div  id="allWhiteBtn" className=" btn-container">
            <NavLink to="/features">
              <button> Check all features </button>
            </NavLink>
          </div>
        </section>
      </section>
    );
  }
}

export default Pricing;
