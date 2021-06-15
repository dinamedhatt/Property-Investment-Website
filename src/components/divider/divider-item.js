import { Component } from "react";

class DividerItem extends Component {
  state = {
    discribtion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
  };
  render() {
    return (
      <section className="dividerItem-section">
        <div className="dividerItem-number-container">
          {this.props.number}
          <hr />
        </div>
        <h5>{this.props.subHeader}</h5>
        <h4>{this.props.header}</h4>
        <div className="divider-img-container">
          <img
            src={`/images/Home/divider/${this.props.imgSrc}.png`}
            alt="divider"
          />
        </div>
        <p>{this.state.discribtion}</p>
      </section>
    );
  }
}

export default DividerItem;