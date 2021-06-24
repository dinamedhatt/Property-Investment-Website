import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt'
import {FaCoins} from '@react-icons/all-files/fa/FaCoins'
import {FaChevronRight} from '@react-icons/all-files/fa/FaChevronRight'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRcmd } from '../../actions';
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
        return(
            <div className="col-9 rounded mx-auto shadow px-2 py-4">

    <div className="largecon mb-3 px-2">
        <h4>Most Recomended</h4>
        <NavLink style={{textDecoration:'none'}} to='/property'><p style={{color:"#143D8D", fontSize:"1.1rem"}}>View  all <FaChevronRight/> </p></NavLink>
    </div>

    <div className="row m-auto">
        {this.state.propertiesList.map((prop,key)=>{
            console.log(key);
                return(
                    <div className="p-0 rounded shadow" id='smallcon' key={key}>
                    <img src={`/images/properties/${prop.image}`}
                  alt="property" className='fullDiv img-fluid'/>
                        <div className="fullDiv">
                      <div className='px-3'>
                        <h4 className="mt-2">{prop.name}</h4>
                             <p style={{color:"#143D8D"}}>{prop.propType}</p>
                             <p>  <FaMapMarkerAlt className="me-2"  style={{color:"#2B59B4"}}/>{prop.location}</p>
                             <p><FaCoins className="me-2"  style={{color:"#2B59B4"}}/>{prop.budget}</p>    
                      </div>       
                          <NavLink to={`/property/${key}`}><input className='btn btn-medium col-12' style={{backgroundColor:'#2B59B4',color:'white'}} type='button' value='View'/></NavLink>
                      </div>
                    </div>
                )
            })}
  </div>
</div>
        
        )
    }
}
export default connect(
    (state) => {
      console.log(state);
      return {
        propertiesList: state.properties.list, //function in properties reducer
      };
    },
    (dispatch) => {
      return bindActionCreators({ getRcmd }, dispatch);
    }
  )(Recommend);
  