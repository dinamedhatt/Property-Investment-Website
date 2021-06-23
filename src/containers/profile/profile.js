import { Component } from "react";
import Applied from "./applied";
import WishList from "./wishList";
import Recommend from './recommended'

import {FaUserEdit} from '@react-icons/all-files/fa/FaUserEdit';
import {FaSave} from '@react-icons/all-files/fa/FaSave'
import {getUser} from '../../actions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Profile extends Component {
    constructor(){
        super()
        this.state={
          name: "",
          email:"",
          occupation:"",
          address:"",
          image:"",
          input:{
            border:"none",
            backgroundColor: "transparent",
            
          },
          src:<FaUserEdit  style={{color:"#2B59B4" ,fontSize:"2rem"}} />,
          imag:{
            position: "absolute",
            top:"20%",
            left:"90%",
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
                src:<FaSave style={{color:"#2B59B4" ,fontSize:"2rem"}} />,
                imag:{
                    position: "absolute",
                    top:"20%",
                    left:"90%",
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
                src:<FaUserEdit style={{color:"#2B59B4" ,fontSize:"2rem"}} />,
                imag:{
                    position: "absolute",
                    top:"20%",
                    left:"90%",                    
                },
                readOnly:true
            });
            this.edit=true;
        }
        
    }
    handleChange=(e)=>{
      
        const{name,value}=e.target;
        this.setState(
            {[name]: value},);
     }

    async componentDidMount(){
      await this.props.getUser(localStorage.getItem('id'),localStorage.getItem('jwt'))
      const user = this.props.user;
      this.setState({name:`${user.fname} ${user.lname}`,email:`${user.email}`,address:`${user.address}`,occupation:`${user.occupation}`})
      console.log(this.state)
    }

    render() {
    return (
        <div className='pb-5'>
            {/* ---------------user section------------------------------------------------------- */}
            <div className="user-section col-xxl-6 col-md-8 col-10 mx-auto p-5">
                <div className="user-data ">
                   <input className="input  name" type="text" placeholder="John Doe" name="name" readOnly={this.state.readOnly}
                    style={this.state.input} value={this.state.name} 
                    onChange={this.handleChange}/>
                   <input className="input black" type="email" placeholder="JohnDoe_38@gmail.com" name="email" readOnly={this.state.readOnly}
                    style={this.state.input} value={this.state.email} 
                    onChange={this.handleChange}/>
                   <input className="input black" type="text" placeholder="Doctor" name="occupation" readOnly={this.state.readOnly}
                    style={this.state.input} value={this.state.occupation} 
                    onChange={this.handleChange}/>
                   <input className="input location" type="text" placeholder="London,England" name="address" readOnly={this.state.readOnly}
                    style={this.state.input} value={this.state.address} 
                    onChange={this.handleChange}/>
                </div>
                <span className="me-2" style={this.state.imag} onClick={ this.editData}>{this.state.src}</span>
                <div className="user-image col-lg-4 col-sm-5 col-5  ms-sm-0 ms-3  mt-sm-0 mt-3 position-absolute bg-white shadow">
                    <img src="/images/profile/user.png" alt="userImage" className="image-fluid w-100 h-100"/>
                </div>
            </div>
            {/* --------------------------slider appled property-------------------------------------------------- */}
            <Applied/>
            <WishList/>
            {/* -------------------recomndation------------------------------------------------------------------ */}
            <Recommend/>

        </div>
    );
  }
}
export default connect(
  (state) => {
    return {
      user: state.users.list,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getUser }, dispatch);
  }
)(Profile);
  