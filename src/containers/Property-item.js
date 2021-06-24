import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FaRegBookmark, FaCoins,FaBuilding } from "react-icons/fa";
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt';
import Recommend from "./profile/recommended"
import {Breadcrumb} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {getProp} from "../actions"

class PropertyDetail extends Component {
    id;
  constructor() {
    super();
    this.state = {
      property: {},
    };
  }

  render() {
    return (
      <div className='py-5'>
      <div className="px-5">
          <div className="links mb-5 ">
              <Breadcrumb>
              <Breadcrumb.Item linkAs={NavLink} linkProps={{to:"/property",style:{color:"grey",textDecoration:"none"}}}>Property</Breadcrumb.Item>
              <Breadcrumb.Item linkAs={NavLink} linkProps={{to:`/property/${this.state.property.id}`,style:{color:"black",textDecoration:"none"}}}>{this.state.property.name}</Breadcrumb.Item>
              </Breadcrumb>
          </div>
          <div className="property-container row mb-5 justify-content-center">
              <div className="col-xl-4 col-lg-12 p-0">
                  <img src={`/images/properties/${this.state.property.image}`} alt="property" style={{width:"100%" ,height:"100%"}} ></img>
              </div>
              <div className="property-detail col-xl-6 col-lg-12 px-5 py-4">
                  <h2 className="mb-3">{this.state.property.name}</h2>
                  <p>{this.state.property.description}</p>
                  <p><FaMapMarkerAlt className="me-2"  style={{color:"#2B59B4"}}/>{this.state.property.location} - {this.state.property.address}</p>
                  <p><FaBuilding className="me-2"  style={{color:"#2B59B4"}}/>{this.state.property.propType} - {this.state.property.investType}</p>
                  <div className="d-flex justify-content-between">
                    <p><FaCoins className="me-2"  style={{color:"#2B59B4"}}/>$ {this.state.property.budget}</p>
                    <button className="btn btn-medium rounded px-3" 
                    style={{backgroundColor:"#2B59B4" ,color:"white"}}
                    >Apply to investment</button>
                  </div>
                </div>
            </div>
      </div>
            <Recommend/>
      </div>
    );
  }

  async componentDidMount(){
    await this.props.getProp(this.props.match.params.id);
    this.setState({ property: this.props.prop});
    // console.log('state aloo',this.state.property);
  }
}


  export default connect(
    (state) => {
      console.log(state);
      return {
        prop: state.properties.list, //function in properties reducer
      };
    },
    (dispatch) => {
      return bindActionCreators({ getProp }, dispatch);
    }
  )(PropertyDetail);
 
 
