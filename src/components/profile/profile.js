import { Component } from "react";
import { NavLink } from "react-router-dom";
import Applied from "./applied";
import WishList from "./wishList";
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt'
import {FaCoins} from '@react-icons/all-files/fa/FaCoins'
import {FaChevronRight} from '@react-icons/all-files/fa/FaChevronRight'
import {FaUserEdit} from '@react-icons/all-files/fa/FaUserEdit';
import {FaSave} from '@react-icons/all-files/fa/FaSave'

class Profile extends Component {
    constructor(){
        super()
        this.state={
          name: "",
          email:"",
          job:"",
          location:"",
          image:"",
          userList:[],
          input:{
            border:"none",
            backgroundColor: "transparent",
            
          },
          src:<FaUserEdit  style={{color:"#2B59B4" ,width:"50px" ,height:"25px"}} />,
          imag:{
            position: "absolute",
            top:"20%",
            left:"90%",
            width:"40px",
          },
          readOnly:true
        }  
    } 
    edit=true;
    editData=()=>{
        console.log(this.edit);
        if(this.edit){
            this.setState({
                input:{
                  border:"1px solid gray",
                  backgroundColor: "white",
                  width:"55%",
                  height:"35px",
                  padding:"10px",
                  
                },
                src:<FaSave style={{color:"#2B59B4" ,width:"50px" ,height:"25px"}} />,
                imag:{
                    position: "absolute",
                    top:"16%",
                    left:"90%",
                    width:"45px",
                  },
                readOnly:false
                });
            this.edit=false;
            console.log(this.edit)    
        }
        else{
            this.setState({
                input:{
                    border:"none",
                    backgroundColor: "transparent",
                },
                src:<FaUserEdit style={{color:"#2B59B4" ,width:"50px" ,height:"25px"}} />,
                imag:{
                    position: "absolute",
                    top:"20%",
                    left:"90%",
                    width:"25px",
                    
                },
                readOnly:true
            });
            this.edit=true;
        }
        
    }
    handleChange=(e)=>{
      
        const{name,value}=e.target;
        this.setState(
            {[name]: value},
            
);
     }
    render() {
    return (
        <div className='pb-5'>
            {/* ---------------user section------------------------------------------------------- */}
            <div className="user-section col-xxl-6 col-md-8 col-10 mx-auto p-5">
                <div className="user-data ">
                   <input className="input  name" type="text" placeholder="John Doe" name="name" readOnly={this.state.readOnly}
                    style={this.state.input} value={this.state.value} 
                    onChange={this.handleChange}/>
                   <input className="input black" type="email" placeholder="JohnDoe_38@gmail.com" name="email" readOnly={this.state.readOnly}
                    style={this.state.input} value={this.state.value} 
                    onChange={this.handleChange}/>
                   <input className="input black" type="text" placeholder="Doctor" name="job" readOnly={this.state.readOnly}
                    style={this.state.input} value={this.state.value} 
                    onChange={this.handleChange}/>
                   <input className="input location" type="text" placeholder="London,England" name="location" readOnly={this.state.readOnly}
                    style={this.state.input} value={this.state.value} 
                    onChange={this.handleChange}/>
                </div>
                <span className="me-2" style={this.state.imag} onClick={ this.editData}>{this.state.src}</span>
                {/* <img src={this.state.src} style={this.state.imag} alt="edit" onClick={ this.editData}/> */}
                <div className="user-image col-lg-4 col-sm-5 col-5  ms-sm-0 ms-3  mt-sm-0 mt-3 position-absolute bg-white shadow">
                    <img src="images/profile/user.png" alt="userImage" className="image-fluid w-100 h-100"/>
                </div>
            </div>
            {/* --------------------------slider appled property-------------------------------------------------- */}
            <Applied/>
            <WishList/>
            {/* -------------------recomndation------------------------------------------------------------------ */}
    <div className="col-9 rounded mx-auto shadow px-2 py-4">

    <div className="largecon mb-3 px-2">
        <h4>Most Recomended</h4>
        <NavLink style={{textDecoration:'none'}} to='/property'><p style={{color:"#143D8D", fontSize:"1.1rem"}}>View  all <FaChevronRight/> </p></NavLink>
    </div>

    <div className="d-md-flex justify-content-between mx-2">

{/* -----------------------BTN AT THE END OF DIV-------------------- */}
 
  <div className="rounded smallcon shadow">
  <img src="images/profile/property1.png" className='fullDiv img-fluid' alt="property"/>
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

{/* -----------------------BTN AT HOVER-------------------- */}

  <div className="rounded smallcon shadow">
      <div style={{position:"relative"}} className='fullDiv'>
        <img src="images/profile/property1.png" className='w-100 h-100' alt="property" id='imgProp' />
        <button id='btnView' className='btn btn-medium btn-outline-light px-4' style={{backgroundColor:'rgb(0 0 0 / 48%)'}}>View</button>
        </div>
      <div className="px-3 fullDiv">
      <h4 className="mt-2">Sea view chalet</h4>
           <p style={{color:"#143D8D"}}>Chalet</p>
           <p>  <FaMapMarkerAlt className="me-2"  style={{color:"#2B59B4"}}/>Abanilla, Múrcia, Spain   </p>
           <p><FaCoins className="me-2"  style={{color:"#2B59B4"}}/>1500</p>           
    </div>
  </div>

   {/* --------------------OTHER 2 DIVS (NO STYLING)------------------ */}

  <div className="rounded smallcon shadow">
  <img src="images/profile/property1.png" className='fullDiv img-fluid' alt="property" width="100%" />
      <div className="px-3 fullDiv">
      <h4 className="mt-2">Sea view chalet</h4>
           <p style={{color:"#143D8D"}}>Chalet</p>
           <p>  <FaMapMarkerAlt className="me-2"  style={{color:"#2B59B4"}}/>Abanilla, Múrcia, Spain   </p>
           <p><FaCoins className="me-2"  style={{color:"#2B59B4"}}/>1500</p>           
        {/* <input className='btn btn-medium rounded' style={{border:"black 2px solid",margin:'auto'}} type='button' value='View' /> */}
    </div>
  </div>


  <div className="rounded smallcon shadow">
  <img src="images/profile/property1.png" className='fullDiv img-fluid' alt="property" width="100%" />
      <div className="px-3 fullDiv">
      <h4 className="mt-2">Sea view chalet</h4>
           <p style={{color:"#143D8D"}}>Chalet</p>
           <p>  <FaMapMarkerAlt className="me-2"  style={{color:"#2B59B4"}}/>Abanilla, Múrcia, Spain   </p>
           <p><FaCoins className="me-2"  style={{color:"#2B59B4"}}/>1500</p>           
        {/* <input className='btn btn-medium rounded' style={{border:"black 2px solid",margin:'auto'}} type='button' value='View' /> */}
    </div>
  </div>

 


  </div>
</div>
        

        </div>
    );
  }
}

export default Profile;
