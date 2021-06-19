import { Component } from "react";
import { FormErrors } from './formError';
import { NavLink } from "react-router-dom";

class Register extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        pass:"",
        name:"",
        // lname:"",
        formErrors: {email: '', pass: '' ,name:'' },
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
          fieldValidationErrors.email = emailValid ? '' : '*Please write your e-mail in a correct format';
          break;
        case 'pass':
          passwordValid = value.length >= 6;
          fieldValidationErrors.pass = passwordValid ? '': '*Password should be more than 5 characters';
          break;
        case 'name':
          fnameValid = value.match(/^([a-zA-Z]{3,})$/) ;
          lnameValid = value.match(/^([a-zA-Z]{3,})$/) ;
          fieldValidationErrors.name = (fnameValid || lnameValid) ? '': '*First and last names should be more than 3 characters without space and numbers';
          break;
        // case 'lname':
        //     lnameValid = value.match(/^([a-zA-Z]{3,})$/) ;
        //     fieldValidationErrors.name = lnameValid ? '': '*First and last names should be more than 3 characters without space and numbers';
        //     break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        fnameValid:fnameValid,
        lnameValid:lnameValid,
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
           <form className="rounded border pe-sm-0 pe-4  shadow-lg row col-lg-6 offset-lg-3  col-10 offset-1  col-md-8 offset-md-2 p-sm-5 py-5 px-0 my-lg-5 my-0 form">
          
         <div className='row  form-group'>
          <div className=" col-sm-4 offset-sm-2 col-10 offset-2 mb-4  form-group">
            <label htmlFor="fname" className="form-label lbl fw-bold ">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
                placeholder="John"
                name="name"
                id="fname"
                required
                onChange={this.handleChange}
            />
          </div>
          
          <div className=" col-sm-4 offset-sm-0 col-10 offset-2 mb-4   form-group">
            <label htmlFor="lname" className="form-label lbl fw-bold ">
              Last Name
            </label>
            <input
             className="form-control"
              type="text"
              placeholder="Doe"
              name="name"
              id="lname"
              required
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className=" lbl text-secondary offset-2 col-8">
              <FormErrors formErrors={this.state.formErrors.name} />
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
            <div className=" lbl text-secondary offset-2">
              <FormErrors formErrors={this.state.formErrors.email} />
            </div>
            <div className="row mb-4 form-group ">
              <label htmlFor="pass" className="form-label col-4 offset-2 mb-2 lbl fw-bold">
                Password
              </label>
              <div className="col-sm-8 offset-sm-2  col-10 offset-2">
              <input
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                className="form-control"
                name="pass"
                id="pass"
                required
                min="8"
                onChange={this.handleChange}
              />
              </div>
            </div>
            <div className=" lbl text-secondary offset-2">
              <FormErrors formErrors={this.state.formErrors.pass} />
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