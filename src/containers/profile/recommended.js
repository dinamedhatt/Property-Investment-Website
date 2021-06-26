import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt'
import {FaCoins} from '@react-icons/all-files/fa/FaCoins'
import {FaChevronRight} from '@react-icons/all-files/fa/FaChevronRight'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRcmd } from '../../actions';
import {Alert,Button} from 'react-bootstrap'
const { Component } = require("react");

class Recommend extends Component{
    constructor() {
        super();
        this.state = {
          propertiesList: []
        };
        
      }

    async componentDidMount() {
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


    render(){
      if(this.state.propertiesList){
      if(this.state.propertiesList.length){
        return(
            <div className="col-9 rounded mx-auto shadow px-2 py-4 mt-5">
              
    <div className="largecon mb-3 px-2">
        <h4>Most Recomended</h4>
        <NavLink style={{textDecoration:'none'}} to='/property'><p style={{color:"#143D8D", fontSize:"1.1rem"}}>View  all <FaChevronRight/> </p></NavLink>
    </div>

    <div className="row m-auto">
        {this.state.propertiesList.map((prop,key)=>{
            // console.log(key);
                return(
                    <div className="p-0 rounded shadow" id='smallcon' key={key}>
                    <img src={`/images/properties/${prop.image}`}
                  alt="property" className='fullDiv img-fluid' style={{height:"180px"}}/>
                        <div className="fullDiv">
                      <div className='px-3'>
                        <h4 className="mt-2">{prop.name}</h4>
                             <p style={{color:"#143D8D"}}>{prop.propType}</p>
                             <p>  <FaMapMarkerAlt className="me-2"  style={{color:"#2B59B4"}}/>{prop.location}</p>
                             <p><FaCoins className="me-2"  style={{color:"#2B59B4"}}/>{prop.budget}</p>    
                      </div>       
                         <NavLink to={`/property/${prop.id}`} ><input className='btn btn-medium col-12 img-fluid viweBtn'  style={{backgroundColor:'#2B59B4',color:'white'}} type='button' value='View'/></NavLink> 
                      </div>
                    </div>
                )
            })}
  </div>
</div>
        
        )}
        else{
          return(
            <Alert variant="warning" className='p-4 mt-5'>
              <Alert.Heading>No properties are available in your country for the moment</Alert.Heading>
              <p>If you are interested in investing in other countries, feel free to check the rest of the available properties by&nbsp;
                <NavLink to='/property' className='alert-link'>clicking here</NavLink>
                </p>
            </Alert>
          )
        }
      }
    }
}
export default connect(
    (state) => {
      // console.log(state);
      return {
        propertiesList: state.properties.list, //function in properties reducer
      };
    },
    (dispatch) => {
      return bindActionCreators({ getRcmd }, dispatch);
    }
  )(Recommend);
  