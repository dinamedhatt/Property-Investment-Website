import { Component } from "react";
import Slider from "react-slick";

class DataSlide extends Component {
  settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll:parseInt(this.props.scroll),
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
          slidesToShow: 7
      }
  }, {
      breakpoint: 992,
      settings: {
          slidesToShow: 6
      }
  }, {
      breakpoint: 600,
      settings: {
          slidesToShow: 5
      }
  }]
  };

  render() {
    const renderSlides = () =>
      [0, 1, 2, 3, 0, 1, 2, 3].map((num) => (
        <div
          className="rounded bg-white pt-3  px-3 mx-5"
          key={num}
          id="slide"
        >
          <img
            className="col-7"
            src={`images/data/${this.props.slide[num]}.png`}
            alt={`${this.props.slide[num]}`}
          />
          <p className="lbl  mt-2">{this.props.slideLbl[num]}</p>
        </div>
      ));

    return (
      <Slider {...this.settings} className="mt-1">
        {renderSlides()}
      </Slider>
    );
  }
}

export default DataSlide;
