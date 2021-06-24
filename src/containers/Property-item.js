import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getproperties } from "../actions";
import { FaBookmark, FaRegBookmark, FaCoins } from "react-icons/fa";
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt';
import Recommend from "./profile/recommended"

class PropertyDetail extends Component {
    id;
  constructor() {
    super();
    this.id = window.location.href.slice(31);
    this.state = {
      property: {},
    };
  }

  render() {
    return (
      <div className="p-5">
          <div className="links mb-5 ">
              <span>Properties </span>
              <span>/</span>
              <span> Property Details</span>
          </div>
          <div className="property-container row mb-5 justify-content-center">
              <div className="property-img col-md-4 col-sm-12 ">
                  <img src="../images/profile/1.png" alt="property" style={{width:"100%" ,height:"100%"}} ></img>
              </div>
              <div className="property-detail col-md-7 col-sm-12 p-4 ">
                  <h2 className="mb-3">Two-bedroom Chalet</h2>
                  <h3 className="mb-3 ">Property Details</h3>
                  <p>Rental Chalet located close to Funchal and easy access the whole island, located a bit higher with a great sea view, which makes it with higher value than other chalets in this village</p>
                  <p><FaMapMarkerAlt className="me-2"  style={{color:"#2B59B4"}}/>Caminho da Corujeira, 9350-241 Ponta do Sol, Portugal</p>
                  <p><FaRegBookmark className="me-2"  style={{color:"#2B59B4"}}/>Chalet - Rent</p>
                  <div className="d-flex justify-content-between">
                    <p><FaCoins className="me-2"  style={{color:"#2B59B4"}}/>$ 20,265</p>
                    <button className="col-4 rounded" 
                    style={{backgroundColor:"#2B59B4" ,color:"white" ,border:"none", height:"50px"}}
                    >Apply to investment</button>
                  </div>
                </div>
            </div>
            {this.id}
            {/* <Recommend/> */}
      </div>
    );
  }}


export default PropertyDetail;

 
 
