import { Component } from "react";
import { FormErrors } from './formError';
import {NavLink} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogin } from "../actions";
import AlertMsg from "../components/alertMsg";
import Error2 from "../components/errors/error2";

class Login extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        pass:"",
        alert: "",
        formErrors: {email: '', pass: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
      };
 
    }
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
  
      switch(fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : '*Please write your e-mail in a correct format';
          break;
        case 'pass':
          passwordValid = value.length >= 6 && value.length <= 12;
          fieldValidationErrors.pass = passwordValid ? '': '*Password should be between 6 to 12 characters';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      }, this.validateForm);
    }
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
  
    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }
  
    //  msg="";
    handleChange=(e)=>{
      
       const{name,value}=e.target;
       this.setState({[name]: value},
        () => { this.validateField(name, value) });
    }

    logUser=async (e) => {
      e.preventDefault();
      const user = {
        email: this.state.email,
        password: this.state.pass
      };
      await this.props.userLogin(user);
      if (this.props.data.token) {
        localStorage.setItem("jwt",this.props.data.token)
        localStorage.setItem("id",this.props.data.id)
        this.setState({alert:""})
        this.props.history.push(`/profile/${localStorage.getItem("id")}`)
        // window.location.assign(`/profile/${localStorage.getItem("id")}`)
      }
      else{
      this.setState({ alert: this.props.data }); }
    }
 
    render() {
      const active = {
        color:"#2B59B4",
        fontWeight:'bold'
      };
    
      const linkStyle={
        color:"#2B59B4",
        textDecoration: "none",
        
      }
      if(!localStorage.getItem("jwt")){
      return (
        <div>
           <div style={{position:'fixed',top:"12%",width:"100%",zIndex:1}} {...(this.state.alert === '' && {
                         style: { display:'none'}
                         })}>
        <AlertMsg color='danger' msg={this.state.alert}/>
        </div>
        {/*         welcome message             */}
          <section className=" welcomSection">
             <h1 className="heading-one">Welcome Back!</h1>
             <p className="fs-4">Login to continue</p>
          </section>
          <section className="bground"><img src='images/login.png' className="bg" alt="background"/></section>
                  {/* form section        */}
                  
           <form className="rounded shadow-lg row col-lg-6 offset-lg-3  col-10 offset-1  col-md-8 offset-md-2 p-5 my-lg-5 my-0 form">
            <div className="row mb-4 form-group">
              <label htmlFor="email" className="col-4 offset-2 mb-2 form-label lbl fw-bold">
                E-mail
              </label>
              <div className=" col-sm-8 offset-sm-2  col-10 offset-2">
              <input
                type="email"
                placeholder="example@mail.com"
                className="form-control"
                name="email"
                id="email"
                value={this.state.value} 
                required
                onChange={this.handleChange}
              />
            </div>
            </div>
            <div className="lbl text-secondary offset-2 ">
              <FormErrors formErrors={this.state.formErrors.email} />
            </div>
            {/* {this.error.email && <p>{this.error.email}</p>} */}
            <div className="row mb-4 form-group">
              <label htmlFor="pass" className="col-4 offset-2 mb-2 form-label lbl fw-bold">
                Password
              </label>
              <div className=" col-sm-8 offset-sm-2  col-10 offset-2">
              <input
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                className="form-control"
                id="pass"
                name="pass"
                value={this.state.value} 
                required
                min="8"
                onChange={this.handleChange}
              />
            </div>
            </div>
            <div className=" lbl text-secondary offset-2">
              <FormErrors formErrors={this.state.formErrors.pass} />
            </div>
            {/* {this.msg && <p>{this.msg}</p>} */}
            <input
              type="submit"
              className="btn  col-3 m-auto "
              style={{ backgroundColor: "#2B59B4", color: "white" }}
              value="Login"
              onClick={this.logUser}
              disabled={!this.state.formValid}
            />
            <div className="row">
            <p 
              className="col-xl-8 col-sm-10 col-9  text-center m-auto mt-4"
              style={{  color: "#4A4A4A" }}>Don’t have an account? <a href="." className="fw-bold"
                  style={{  color: "#2B59B4" ,textDecoration:"none"}} > <NavLink to='/register' activeStyle={active} style={linkStyle}>Sign Up</NavLink></a> now</p>
            </div>
          </form> 
        </div>
      );}
      else{return <Error2/>}
    }
  }
  
  
export default connect(
  (state) => {
    return {
      data: state.users.list,
    };
  },
  (dispatch) => {
    return bindActionCreators({ userLogin }, dispatch);
  }
)(Login);
  