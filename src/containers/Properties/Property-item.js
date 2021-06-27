import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FaCoins, FaBuilding } from "react-icons/fa";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import Recommend from "../profile/recommended";
import { Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Error from "../../components/errors/error";
import {
  getProp,
  applylistUser,
  getApplylist,
  getUser,
  getproperties,
  getRcmd
} from "../../actions";
import axios from "axios";
import AlertMsg from "../../components/alertMsg";

class PropertyDetail extends Component {
  id;
  constructor() {
    super();
    this.state = {
      property: {},
      appliedList: [],
      propertiesList: [],
      applyLetter: "",
      alert: "",
      color: "",
      msg: "",
      disabled: false,
      viewerUser: {},
      propertiesId: [],
    };
  }

  setLetter = (e) => {
    this.setState({ applyLetter: e.target.value });
  };

  //to handle sending letter
  sendletter(e) {
    //sending the email
    e.preventDefault();
    this.setState({ disabled: true });

    axios({
      method: "POST",
      url: "http://localhost:3100/sendLetter",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        this.addToAppliedList();
        this.hideTextArea();
        this.setState({ color: "success", alert: "Your application has been submitted successfully! We will get back to you soon on your mail regarding the application" });
      } else if (response.data.status === "fail") {
        this.setState({ alert: "Application letter is NOT sent!", color: "danger" });
      }
    });
  }

  addToAppliedList = () => {
    //add to applied list
    let Arr = [];
    Arr.push(this.state.property);
    this.setState({ appliedList: Arr });
    this.props.applylistUser(
      localStorage.getItem("jwt"),
      Arr,
      localStorage.getItem("id")
    );
  };

  hideTextArea() {
    document.getElementById("apply-letter").style.display = "none";
  }

  render() {
    if (this.state.propertiesId.some((e) => e.id === this.state.property.id)) {
      return (
        <div className="py-5">
          <div className="px-5">
            <div className="links mb-5 ">
              <Breadcrumb>
                <Breadcrumb.Item
                  linkAs={NavLink}
                  linkProps={{
                    to: "/property",
                    style: { color: "grey", textDecoration: "none" },
                  }}
                >
                  Property
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  linkAs={NavLink}
                  linkProps={{
                    to: `/property/${this.state.property.id}`,
                    style: { color: "black", textDecoration: "none" },
                  }}
                >
                  {this.state.property.name}
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="property-container row mb-5 justify-content-center">
              <div className="col-xl-4 col-lg-12 p-0">
                <img
                  src={`/images/properties/${this.state.property.image}`}
                  alt="property"
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </div>
              <div className="property-detail col-xl-6 col-lg-12 px-5 py-4">
                <h2 className="mb-3">{this.state.property.name}</h2>
                <p>{this.state.property.description}</p>
                <p>
                  <FaMapMarkerAlt
                    className="me-2"
                    style={{ color: "#2B59B4" }}
                  />
                  {this.state.property.location} - {this.state.property.address}
                </p>
                <p>
                  <FaBuilding className="me-2" style={{ color: "#2B59B4" }} />
                  {this.state.property.propType} -{" "}
                  {this.state.property.investType}
                </p>
                <div className="d-flex justify-content-between">
                  <p>
                    <FaCoins className="me-2" style={{ color: "#2B59B4" }} />${" "}
                    {this.state.property.budget}
                  </p>
                  <button
                    {...(!localStorage.getItem("jwt") && { disabled: true })}
                    {...(this.state.appliedList.some(
                      (e) => e.id === this.state.property.id
                    ) && { disabled: true })}
                    className="btn btn-medium rounded px-3 property-apply-btn"
                    style={{ backgroundColor: "#2B59B4", color: "white" }}
                    onClick={() => {
                      document.getElementById("apply-letter").style.display =
                        "block";
                    }}
                  >
                    Apply to investment
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="apply-letter" id="apply-letter">
            <h3>Application Letter </h3>
            <textarea
            rows='5'
              value={this.state.applyLetter}
              onChange={this.setLetter.bind(this)}
            />
            <input
              type="button"
              className="btn btn-medium rounded px-3 send-letter-btn"
              style={{
                backgroundColor: "#2B59B4",
                color: "white",
                display: "block",
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
              value="Send"
              disabled={this.state.disabled}
              onClick={this.sendletter.bind(this)}
            />
          </div>

          <div
            {...(this.state.alert === "" && {
              style: { display: "none" },
            })}
          >
            <AlertMsg color={this.state.color} msg={this.state.alert} />
          </div>

          <Recommend propList={this.state.propertiesList} />
        </div>
      );
    } else {
      return (
        <div>
          <Error />
        </div>
      );
    }
  }

  async componentDidMount() {
    await this.props.getproperties(this.props.id);
    this.setState({
      propertiesId: this.props.propertiesList,
    });

    await this.props.getProp(this.props.match.params.id);
    this.setState({ property: this.props.prop });

    await this.props.getApplylist(localStorage.getItem("id"));
    this.setState({ appliedList: this.props.applylist });

    if (localStorage.getItem("jwt")) {
      await this.props.getUser(
        localStorage.getItem("id"),
        localStorage.getItem("jwt")
      );

      this.setState({ viewerUser: this.props.user });
    }

    //------------rcmnd section--------------
    await this.props.getRcmd(localStorage.getItem("location"));
        this.setState({ propertiesList: this.props.propertiesList });
        
        //handling recommendation appearance
        if(this.state.propertiesList.length>4){
            var propArr=[];
            for(let i =0; i<4;i++){
                propArr.push(this.state.propertiesList[i]);
            }
            this.setState({propertiesList:propArr})
        }
  }
}

export default connect(
  (state) => {
    console.log(state);
    return {
      prop: state.properties.prop, //function in properties reducer
      applylist: state.users.applylist,
      user: state.users.list,
      propertiesList: state.properties.list,
    };
  },
  (dispatch) => {
   return bindActionCreators(
      { getProp, applylistUser, getApplylist, getUser, getRcmd, getproperties },
      dispatch
    );
  }
)(PropertyDetail);