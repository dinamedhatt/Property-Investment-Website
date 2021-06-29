import { Component } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getApplylist, Unapply, getUser } from "../../actions";
import { FaMinusCircle } from "@react-icons/all-files/fa/FaMinusCircle";
import axios from "axios";
import AlertMsg from "../../components/alertMsg";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

class Applied extends Component {
  constructor() {
    super();
    this.state = {
      applyList: [],
      propertyData: {},
      alert: "",
      color: "",
      msg: "",
      user: {},
    };
  }

  getList = async () => {
    await this.props.getApplylist(localStorage.getItem("id"));
    this.setState({ applyList: this.props.applylist });
  };


  //to handle sending letter
  sendletter(e) {
    //sending the email
    axios({
      method: "POST",
      url: "http://localhost:3100/cancelLetter",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        this.setState({
          color: "success",
          alert:
            "Your cancellation has been submitted successfully!",
        });
        // this.hideTextArea();
      } else if (response.data.status === "fail") {
        this.setState({
          alert: "cancellation letter is NOT sent!",
          color: "danger",
        });
      }
    });
  }

  render() {
    const settings = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <Arrow />,
      nextArrow: <Arrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    // const renderSlide = () =>

    //   ));
    return (
      <div>
        {this.state.applyList.length > 0 && (
          <div>
            <h2 className="text-center mb-3 mt-5">Recently Applied</h2>
            <Slider className="col-10 col-lg-11 m-auto" {...settings}>
              {this.state.applyList.map((prop, key) => (
                <div key={key} className="p-5 mx-3 ">
                  <div className="rounded content">
                    <div className="content-overlay"></div>
                    <img
                      className="col-12 rounded "
                      src={`/images/properties/${prop.image}`}
                      alt={`img${prop.id}`}
                      height="280px"
                    />
                    <div className="content-details fadeIn-top">
                      <h3>{prop.name}</h3>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to={`/property/${prop.id}`}
                      >
                        <p style={{ color: "#fff", fontSize: "1em" }}>View</p>
                      </NavLink>
                    </div>
                    <FaMinusCircle
                      style={{
                        fontSize: "2rem",
                        color: "white",
                        position: "absolute",
                        zIndex: 1,
                        top: "4%",
                        left: "4%",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        let obj = { id: prop.id };
                        let obj2 = { id: prop.id, name: prop.name };
                        
                        this.props.Unapply(obj, localStorage.getItem("id"));
                        this.setState(
                          {
                            propertyData: obj2,
                          },
                          () => {
                            this.sendletter(this);
                          }
                        );

                        this.getList();
                      }}
                    />
                    <div
                      className="d-flex p-1 bg-dark text-light position-absolute col-12"
                      style={{ bottom: 0 }}
                    >
                      Status:{" "}
                      <p className="my-0" {...prop.state}>
                        &nbsp;Pending..
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}

        <div
          {...(this.state.alert === "" && {
            style: { display: "none" },
          })}
        >
          <AlertMsg color={this.state.color} msg={this.state.alert} />
        </div>
      </div>
    );
  }
  async componentDidMount() {
    await this.props.getApplylist(localStorage.getItem("id"));
    this.setState({ applyList: this.props.applylist });

  

    await this.props.getUser(
      localStorage.getItem("id"),
      localStorage.getItem("jwt")
    );

    this.setState({ user: this.props.user });
  }
}

export default connect(
  (state) => {
    return {
      applylist: state.users.applylist, //function in properties reducer
      // prop: state.properties.prop,
      user: state.users.list,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getApplylist, Unapply, getUser }, dispatch);
  }
)(Applied);
