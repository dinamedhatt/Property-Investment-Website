import { Component } from "react";
import JoinBtn from "../containers/join-btn";
// import { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark";
import { GiCheckMark } from "react-icons/gi";

class Pricing extends Component {
  state = {
    checkedStatus: true,
  };

  isChecked = (event) => {
    this.setState({
      checkedStatus: event.target.checked,
    });
  };

  render() {
    return (
      <section className="Pricing-section">
        <h1 className="heading-one">Pricing</h1>
        <p className="col-10 offset-1">
          One plane, monthly or yearly payments. Try 14 days for free Dead
          simple like everything we do
        </p>

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
            <label>Yearly</label>
          </div>

          <p>
            You save <span>30%</span> with the yearly plane
          </p>
        </section>

        <section className="check-feature-section">
          <p>Not yet convinced?</p>
          <div className="btn-container">
            <button> Check all features </button>
          </div>
        </section>
      </section>
    );
  }
}

export default Pricing;
