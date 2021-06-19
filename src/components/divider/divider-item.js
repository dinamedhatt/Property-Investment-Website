import { Component } from "react";

class DividerItem extends Component {
  render() {
    return (
      <section className="dividerItem-section">
        <div className="dividerItem-number-container">
          {this.props.number}
          <hr />
        </div>
        <div className="rightContainer">
          <h5>{this.props.subHeader}</h5>
          <h4>{this.props.header}</h4>
          <div className="divider-img-container">
            <img
              src={`/images/Home/divider/${this.props.imgSrc}.png`}
              alt="divider"
            />
          </div>
          <p className="mx-lg-0 mx-auto">{this.props.discribtion}</p>
        </div>
      </section>
    );
  }
}

export default DividerItem;
