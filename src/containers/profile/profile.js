import { Component } from "react";
import Applied from "./applied";
import WishList from "./wishList";
import Recommend from './recommended'

import {FaUserEdit} from '@react-icons/all-files/fa/FaUserEdit';
import {getUser,getRcmd} from '../../actions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Error2 from '../../components/errors/error2'
import Edit from './edit'


class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
          name: "",
          email:"",
          occupation:"",
          address:"",
          image:"",
          edit:false,
          propertiesList: []
        }
    } 

    handleChange=(e)=>{
      
        const{name,value}=e.target;
        this.setState(
            {[name]: value},);
     }

    async componentDidMount(){
      if(localStorage.getItem('jwt')){
      await this.props.getUser(localStorage.getItem('id'),localStorage.getItem('jwt'))
      const user = this.props.user;
      this.setState({name:`${user.fname} ${user.lname}`,email:`${user.email}`,address:`${user.address}`,occupation:`${user.occupation}`,image:`${user.image}`})
      localStorage.setItem("location",this.state.address)
      console.log("imageeee",this.state)

      this.handleRcmd()
    }
    }

    handleRcmd=async()=>{
      await this.props.getRcmd(this.state.address);
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


    render() {
      if(localStorage.getItem('jwt')){
    return (
        <div className='pb-5 position-relative'>
          {(this.state.edit) &&
          <Edit handleToUpdate = {async(obj,editStatus)=>{ 
            await this.setState({name:`${obj.fname} ${obj.lname}`,address:obj.address,occupation:obj.occupation,edit:editStatus});
            this.handleRcmd()
        }}/>
      }
  
      <div style={{ background: "linear-gradient(0deg, rgb(23 5 88 / 12%), rgba(19, 6, 94, 0.3)) no-repeat, url(/images/profileCover.jpg)"
      ,backgroundRepeat: 'no-repeat',height:'200px',
      position:'absolute',width:'100%'}}></div>

            {/* ---------------user section------------------------------------------------------- */}
            <div className="user-section col-xxl-6 col-md-8 col-10 mx-auto p-lg-5 ps-md-0">
                <div className="user-data ">
                   <p className="input  name col-10">{this.state.name}</p>
                   <p className='input black col-10'>{this.state.email}</p>
                   <p className='input black col-10'>{this.state.occupation}</p>
                   <p className='input location col-10'>{this.state.address}</p>
                </div>
                <FaUserEdit style={{color:"#2B59B4" ,fontSize:"2rem",position:'absolute',top:'20%',left:'90%',cursor:'pointer'}} onClick={()=>{this.setState({edit:true})}}/>
                <div className="user-image col-lg-4 col-5 position-absolute bg-white" style={{border:"7px white solid"}}>
                    <img {...(this.state.image)&& {src:`http://localhost:3100/${this.state.image}`}} 
                    {...(this.state.image==="undefined")&& {src:"/images/default.png"}}
                    alt="userImage" className="image-fluid w-100 h-100"/>
                </div>
            </div>
            {/* --------------------------slider appled property-------------------------------------------------- */}
            <Applied/>
            <WishList/>
            {/* -------------------recomndation------------------------------------------------------------------ */}
            <Recommend propList={this.state.propertiesList}/>

        </div>
    );
      }
      else{
       return(
         <div>
        <Error2/>
        </div>
       )
      }
  }
}
export default connect(
  (state) => {
    return {
      user: state.users.list,
      propertiesList: state.properties.list
    };
  },
  (dispatch) => {
    return bindActionCreators({ getUser,getRcmd }, dispatch);
  }
)(Profile);
  