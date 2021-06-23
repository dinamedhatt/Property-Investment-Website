import { Component } from "react";
import { NavLink } from "react-router-dom";
import Applied from "./applied";
import WishList from "./wishList";
import {FaMapMarkerAlt} from '@react-icons/all-files/fa/FaMapMarkerAlt'
import {FaCoins} from '@react-icons/all-files/fa/FaCoins'
import {FaChevronRight} from '@react-icons/all-files/fa/FaChevronRight'


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
          src:"images/profile/edit.png",
          imag:{
            position: "absolute",
            top:"20%",
            left:"90%",
            width:"25px",
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
                src:"images/profile/save.png",
                imag:{
                    position: "absolute",
                    top:"16%",
                    left:"88%",
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
                src:"images/profile/edit.png",
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
                <img src={this.state.src} style={this.state.imag} alt="edit" onClick={ this.editData}/>
                <div className="user-image col-lg-4 col-sm-5 col-5  ms-sm-0 ms-3  mt-sm-0 mt-3 position-absolute bg-white shadow">
                    <img src="images/profile/user.png" alt="userImage" className="image-fluid w-100 h-100"/>
                </div>
            </div>
            {/* --------------------------slider appled property-------------------------------------------------- */}
            <Applied/>
            <WishList/>
            {/* -------------------recomndation------------------------------------------------------------------ */}
    <div className="col-9 rounded mx-auto shadow p-4 ">

    <div className="d-flex justify-content-between px-2 mb-3">
        <h3>Most Recomended</h3>
        <NavLink style={{textDecoration:'none'}} to='/property'><p style={{color:"#143D8D", fontSize:"1.1rem"}}>View  all <FaChevronRight/> </p></NavLink>
    </div>

    <div className="d-md-flex justify-content-between">

  <div className="rounded smallcon shadow">
  <img src="images/profile/property1.png" className='fullDiv' alt="property" width="100%" height="168px"/>
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
