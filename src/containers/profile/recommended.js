import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt'
import {FaCoins} from '@react-icons/all-files/fa/FaCoins'
import {FaChevronRight} from '@react-icons/all-files/fa/FaChevronRight'
import { NavLink } from "react-router-dom";
const { Component } = require("react");


class Recommend extends Component{
    constructor(){
        super();
        this.state={};

    }
    render(){
        return(
            <div className="col-9 rounded mx-auto shadow px-2 py-4">

    <div className="largecon mb-3 px-2">
        <h4>Most Recomended</h4>
        <NavLink style={{textDecoration:'none'}} to='/property'><p style={{color:"#143D8D", fontSize:"1.1rem"}}>View  all <FaChevronRight/> </p></NavLink>
    </div>

    <div className="d-md-flex justify-content-between mx-2">

{/* -----------------------BTN AT THE END OF DIV-------------------- */}
 
  <div className="rounded smallcon shadow">
  <img src="/images/profile/property1.png" className='fullDiv img-fluid' alt="property"/>
      <div className="fullDiv">
    <div className='px-3'>
      <h4 className="mt-2">Sea view chalet</h4>
           <p style={{color:"#143D8D"}}>Chalet</p>
           <p>  <FaMapMarkerAlt className="me-2"  style={{color:"#2B59B4"}}/>Abanilla, Múrcia, Spain   </p>
           <p><FaCoins className="me-2"  style={{color:"#2B59B4"}}/>1500</p>    
    </div>       
        <input className='btn btn-medium col-12 m-auto' style={{backgroundColor:'#2B59B4',color:'white'}} type='button' value='View' />
    </div>
  </div>
  </div>
</div>
        
        )
    }
}

export default Recommend