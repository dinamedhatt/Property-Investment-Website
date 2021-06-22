import { Component } from "react";
// import { NavLink } from "react-router-dom";
import Applied from "./applied";
import WishList from "./wishList";
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
                  width:"300px",
                  height:"35px",
                  padding:"10px",
                  
                },
                src:"images/profile/save.png",
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
        <div>
            {/* ---------------user section------------------------------------------------------- */}
            <div className="user-section">
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
                <div className="user-image shadow">
                    <img src="images/profile/user.png" alt="user image" width="250px" height="250px"/>
                </div>
            </div>
            {/* --------------------------slider appled property-------------------------------------------------- */}
            <Applied/>
            <WishList/>
            {/* -------------------recomndation------------------------------------------------------------------ */}
            <div className="recomendation shadow p-5">
                <div className="d-flex justify-content-between ">
                    <h2>Most Recomended</h2>
                    <p style={{color:"#143D8D", fontSize:"1.1rem"}}>View  all &gt;</p>
                </div>
                <div className="d-flex justify-content-between mt-5 ">
                    {/* ------------------property1------------------------------ */}
                    <div className="property-continer shadow">
                        <img src="images/profile/property1.png" alt="property" className="property-image"></img>
                        <h3 className="mt-2 property-margin">Sea view chalet</h3>
                        <p className="property-margin" style={{color:"#143D8D"}}>Chalet</p>
                        <div className="mb-3 property-margin">
                           <img className= "img" src="images/profile/location.png" alt="location"/>
                           <span >Abanilla, Múrcia, Spain</span>
                        </div>
                        <div className="property-margin">
                           <img className= "img" src="images/profile/price.png" alt="price"/>
                           <span>1500</span>
                        </div>
                        <input className='btn btn-medium btn-rounded px-5 mt-4' style={{backgroundColor:"white",border:"black 2px solid" , marginLeft:"60px"}} type='button' value='View' />
                   </div>
                    {/* ------------------property2------------------------------ */}
                    <div className="property-continer shadow">
                        <img src="images/profile/property2.png" alt="property" width="277px" height="168px"></img>
                        <h3 className="mt-2 property-margin">One Bedroom Flat</h3>
                        <p className="property-margin" style={{color:"#143D8D"}}>Apartment</p>
                        <div className="mb-3 property-margin">
                           <img className= "img" src="images/profile/location.png" alt="location"/>
                           <span >Charles Street, London, W1J</span>
                        </div>
                        <div className="property-margin" >
                           <img className= "img" src="images/profile/price.png" alt="price"/>
                           <span>350.000</span>
                        </div>
                        <input className='btn btn-medium btn-rounded px-5 mt-4' style={{backgroundColor:"white",border:"black 2px solid" , marginLeft:"60px"}} type='button' value='View' />
                   </div>
                    {/* ------------------property3------------------------------ */}
                    <div className="property-continer shadow">
                        <img src="images/profile/property1.png" alt="property" className="property-image"></img>
                        <h3 className="mt-2 property-margin">Sea view chalet</h3>
                        <p className="property-margin" style={{color:"#143D8D"}}>Chalet</p>
                        <div className="mb-3 property-margin">
                           <img className= "img" src="images/profile/location.png" alt="location"/>
                           <span >Abanilla, Múrcia, Spain</span>
                        </div>
                        <div className="property-margin">
                           <img className= "img" src="images/profile/price.png" alt="price"/>
                           <span>1500</span>
                        </div>
                        <input className='btn btn-medium btn-rounded px-5 mt-4' style={{backgroundColor:"white",border:"black 2px solid" , marginLeft:"60px"}} type='button' value='View' />
                   </div>
                    {/* ------------------property4------------------------------ */}
                    <div className="property-continer shadow">
                        <img src="images/profile/property2.png" alt="property" width="277px" height="168px"></img>
                        <h3 className="mt-2 property-margin">One Bedroom Flat</h3>
                        <p className="property-margin" style={{color:"#143D8D"}}>Apartment</p>
                        <div className="mb-3 property-margin">
                           <img className= "img" src="images/profile/location.png" alt="location"/>
                           <span >Charles Street, London, W1J</span>
                        </div>
                        <div className="property-margin" >
                           <img className= "img" src="images/profile/price.png" alt="price"/>
                           <span>350.000</span>
                        </div>
                        <input className='btn btn-medium btn-rounded px-5 mt-4' style={{backgroundColor:"white",border:"black 2px solid" , marginLeft:"60px"}} type='button' value='View' />
                   </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Profile;
