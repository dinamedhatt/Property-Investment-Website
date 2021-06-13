import { Component } from "react";
import { FormErrors } from './formError';
class Login extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        pass:"",
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
          fieldValidationErrors.email = emailValid ? '' : ' Email is invalid';
          break;
        case 'pass':
          passwordValid = value.length >= 6;
          fieldValidationErrors.pass = passwordValid ? '': ' Password should be more than 5';
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
    handelSumbit=(e)=>{
      e.preventDefault();
    }
    
    render() {
      return (
        <div className="parent" >
        {/*         welcom message             */}
          <section className=" welcomSection">
             <h1 className="heading-one">Welcome Back!</h1>
             <p>Login to continue</p>
          </section>
          <section className="bground"><img src='images/login.png' className="bg" alt="background"/></section>
          {/*         form section  */}
           <form className="rounded border   row col-6 offset-3 p-5 my-5 form">
           <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
           </div>
            <div className="row mb-4 form-group">
              <label htmlFor="email" className="col-4 offset-2 mb-2 form-label lbl fw-bold">
                E-mail
              </label>
              <div className="col-8 offset-2 ">
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
            {/* {this.error.email && <p>{this.error.email}</p>} */}
            <div className="row mb-4 form-group">
              <label htmlFor="pass" className="col-4 offset-2 mb-2 form-label lbl fw-bold">
                Password
              </label>
              <div className=" col-8 offset-2 ">
              <input
                type="password"
                placeholder="********"
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
            {/* {this.msg && <p>{this.msg}</p>} */}
            <input
              type="submit"
              className="btn  col-3 m-auto "
              style={{ backgroundColor: "#2B59B4", color: "white" }}
              value="Login in"
              disabled={!this.state.formValid}
            />
            <div className="row">
            <p 
              className="col-8  m-auto mt-4"
              style={{  color: "#4A4A4A" }}>Don’t have an account? <a href="." className="fw-bold"
                  style={{  color: "#2B59B4" ,textDecoration:"none"}} >Sign Up</a> now</p>
            </div>
          </form> 
        </div>
      );
    }
  }
  
  export default Login;
  