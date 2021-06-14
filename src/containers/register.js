import { Component } from "react";
import { FormErrors } from './formError';
import { NavLink } from "react-router-dom";

class Register extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        pass:"",
        fname:"",
        lname:"",
        formErrors: {email: '', pass: '' ,fname:'' , lname:''},
        emailValid: false,
        passwordValid: false,
        fnameValid:false,
        lnameValid:false,
        formValid: false
      };
    }
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
      let fnameValid = this.state.fnameValid;
      let lnameValid = this.state.lnameValid;
  
      switch(fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' Email is invalid';
          break;
        case 'pass':
          passwordValid = value.length >= 6;
          fieldValidationErrors.pass = passwordValid ? '': ' Password should be more than 5';
          break;
        case 'fname':
          fnameValid = value.match(/^([a-zA-Z]{3,})$/) ;
          fieldValidationErrors.fname = fnameValid ? '': ' FirstName should be more than 3 and not contain number or space';
          break;
        case 'lname':
          lnameValid = value.match(/^([a-zA-Z]{3,})$/) ;
          fieldValidationErrors.lname = lnameValid ? '': ' LastName should be more than 3 and not contain number or space';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        fnameValid:fnameValid,
        lnameValid:lnameValid

      }, this.validateForm);
    }
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.fnameValid && this.state.lnameValid});
    }
  
    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }
    handleChange=(e)=>{
      const{name,value}=e.target;
      this.setState({[name]: value},
        () => { this.validateField(name, value) });
   }

   handelSumbit=(e)=>{
     e.preventDefault();
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
      return (
        <div className="parent" >
        {/*         welcom message             */}
          <section className=" welcomSection">
             <h1 className="heading-one">Welcome!</h1>
             <p className="fs-4">Sign up to continue</p>
          </section>
          <section className="bground"><img src='images/login.png' alt="background" className="bg"/></section>
         
         
         
         
         
          {/*         form section /////////////// */}
           <form className="rounded border   shadow-lg row col-lg-6 offset-lg-3  col-10 offset-1  col-md-8 offset-md-2 p-sm-5 py-5 px-0 my-lg-5 my-0 form">
           <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
           </div>
           <div className=" row mb-2 ">
              <label htmlFor="fname" className="col-5 offset-2 form-label lbl fw-bold">
                First name
              </label>
              <label htmlFor="lname" className="col-5  form-label lbl fw-bold">
                Last name
              </label>
            </div>
            <div className="row ">
            <div className="col-sm-4 offset-2 col-5 mb-4 ">
               <input
               className=" form-control"
                type="text"
                placeholder="John"
                name="fname"
                id="fname"
                required
                onChange={this.handleChange}
              />
              </div>
              <div className="col-sm-4  col-5 mb-4">
               <input
               className="form-control"
                type="text"
                placeholder="Doe"
                name="lname"
                id="lname"
                required
                onChange={this.handleChange}
              />
            </div>
            </div>
         
            <div className="row mb-4 form-group">
              <label htmlFor="email" className="form-label mb-2 col-4   offset-2 lbl fw-bold">
                E-mail
              </label>
              <div  className="col-sm-8 offset-sm-2  col-10 offset-2">
              <input
                type="email"
                placeholder="example@mail.com"
                className="form-control"
                name="email"
                id="email"
                required
                onChange={this.handleChange}
              />
            </div>
            </div>
 
            <div className="row mb-4 form-group ">
              <label htmlFor="pass" className="form-label col-4 offset-2 mb-2 lbl fw-bold">
                Password
              </label>
              <div className="col-sm-8 offset-sm-2  col-10 offset-2">
              <input
                type="password"
                placeholder="********"
                className="form-control"
                name="pass"
                id="pass"
                required
                min="8"
                onChange={this.handleChange}
              />
              </div>
            </div>
          
            <input
              type="submit"
              className="btn col-md-3 col-4 m-auto "
              style={{ backgroundColor: "#2B59B4", color: "white" }}
              value="Sign Up"
              onClick={this.handelSumbit}
              disabled={!this.state.formValid}
            />
            <div className="row">
            <p 
              className="col-xl-8 col-sm-10 col-9  text-center m-auto mt-4"
              style={{  color: "#4A4A4A" }}>Don’t have an account? <a href="." className="fw-bold"
                  style={{  color: "#2B59B4" ,textDecoration:"none"}} ><NavLink to='/login' activeStyle={active} style={linkStyle}>Login</NavLink></a> now</p>
            </div>
          </form> 
        </div>
      );
    }
  }
  
  export default Register;