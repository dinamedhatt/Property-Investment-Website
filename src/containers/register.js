import { Component } from "react";
import { FormErrors } from "./formError";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUser } from "../actions";
import AlertMsg from "../components/alertMsg";
import Error2 from "../components/errors/error2";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
      fname: "",
      lname: "",
      country: "Select country",
      alert: "",
      image:"",

      formErrors: { email: "", pass: "", fname: "", lname: "" },
      emailValid: false,
      passwordValid: false,
      fnameValid: false,
      lnameValid: false,
      formValid: false,
    };
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let fnameValid = this.state.fnameValid;
    let lnameValid = this.state.lnameValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid
          ? ""
          : "*Please write your e-mail in a correct format";
        break;
      case "pass":
        passwordValid = value.length >= 6 && value.length <= 12;
        fieldValidationErrors.pass = passwordValid
          ? ""
          : "*Password should be between 6 to 12 characters";
        break;
      case "fname":
      case "lname":
        fnameValid = value.match(/^([a-zA-Z]{3,})$/);
        lnameValid = value.match(/^([a-zA-Z]{3,})$/);
        fieldValidationErrors.name =
          fnameValid && lnameValid
            ? ""
            : "*Names should be more than 3 characters without space and numbers";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        fnameValid: fnameValid,
        lnameValid: lnameValid,
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.fnameValid &&
        this.state.lnameValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };


  addUser=async(e)=>{
      e.preventDefault();
           let user = new FormData();
     user.append('fname',this.state.fname);
     user.append('lname',this.state.lname);
     user.append('email',this.state.email);
     user.append('address',this.state.country);
     user.append('password',this.state.pass);
     user.append('image',this.state.image);

      await this.props.addUser(user);
      if (this.props.data === "success") {
        this.props.history.push("/login");
      }
      else{
      this.setState({ alert: this.props.data });}
  }

  render() {
    const active = {
      color: "#2B59B4",
      fontWeight: "bold",
    };

    const linkStyle = {
      color: "#2B59B4",
      textDecoration: "none",
    };
    if(!localStorage.getItem("jwt")){
    return (
      <div>
           <div style={{position:'fixed',top:"12%",width:"100%",zIndex:1}} {...(this.state.alert === '' && {
                         style: { display:'none'}
                         })}>
        <AlertMsg color='danger' msg={this.state.alert}/>
        </div>
        {/*         welcom message             */}
        <section className=" welcomSection2">
          <h1 className="heading-one">Welcome!</h1>
          <p className="fs-4">Sign up to continue</p>
        </section>
        <section className="bground">
          <img src="images/login.png" alt="background" className="bg" />
        </section>

        {/*         form section /////////////// */}
        <form className="rounded border pe-sm-0 pe-4  shadow-lg row col-lg-6 offset-lg-3  col-10 offset-1  col-md-8 offset-md-2 p-sm-5 py-5 px-0 my-lg-5 my-0 form">
          <div className="row  form-group">
            <div className=" col-sm-4 offset-sm-2 col-10 offset-2 mb-2 form-group">
              <label htmlFor="fname" className="form-label lbl fw-bold ">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="John"
                name="fname"
                id="fname"
                required
                onChange={this.handleChange}
              />
            </div>

            <div className=" col-sm-4 offset-sm-0 col-10 offset-2 mb-2 form-group">
              <label htmlFor="lname" className="form-label lbl fw-bold ">
                Last Name
              </label>
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
          <div className=" lbl text-secondary offset-2 col-8">
            <FormErrors formErrors={this.state.formErrors.name} />
          </div>

          <div className="row mb-2 form-group">
            <label
              htmlFor="email"
              className="form-label mb-2 col-4   offset-2 lbl fw-bold"
            >
              E-mail
            </label>
            <div className="col-sm-8 offset-sm-2  col-10 offset-2">
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

          <div className=" lbl text-secondary text-center">
            <FormErrors formErrors={this.state.formErrors.email} />
          </div>
          <div className="row mb-2 form-group ">
            <label
              htmlFor="pass"
              className="form-label col-4 offset-2 mb-2 lbl fw-bold"
            >
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

          <div className=" lbl text-secondary  text-center">
            <FormErrors formErrors={this.state.formErrors.pass} />
          </div>

          <div className="row  form-group mb-4">
            <div className=" col-sm-4 offset-sm-2 col-10 offset-2 mb-2 form-group">
            <label
              htmlFor="Country"
              className="form-label lbl fw-bold "
            >
              Country
            </label>
            <select
                className="form-select "
                name="country"
                defaultValue={this.state.country}
                onChange={this.handleChange}
              >
                <option value="Select country" disabled>
                  Select country
                </option>
                <option value="England">England</option>
                <option value="France">France</option>
                <option value="Belgium">Belgium</option>
                <option value="Germany">Germany</option>
                <option value="Portugal">Portugal</option>
                <option value="Portugal">Spain</option>

              </select>
            </div>

            <div className=" col-sm-4 offset-sm-0 col-10 offset-2 mb-2 form-group">
              <label htmlFor="image" className="form-label lbl fw-bold ">
                Image
              </label>
              <input
                className="form-control"
                type="file"
                placeholder="Insert image"
                name="image"
                id="image"
                required
                onChange={(e)=>{
                  this.setState({image:e.target.files[0]});
                }}
              />
            </div>
          </div>


          <input
            type="submit"
            className="btn col-md-3 col-4 m-auto "
            style={{ backgroundColor: "#2B59B4", color: "white" }}
            value="Sign Up"
            disabled={!this.state.formValid}
            onClick={this.addUser}
          />
          <div className="row">
            <p
              className="col-xl-8 col-sm-10 col-9  text-center m-auto mt-4"
              style={{ color: "#4A4A4A" }}
            >
              Already have an account?{" "}
              <a
                href="."
                className="fw-bold"
                style={{ color: "#2B59B4", textDecoration: "none" }}
              >
                <NavLink to="/login" activeStyle={active} style={linkStyle}>
                  Login
                </NavLink>
              </a>{" "}
              now
            </p>
          </div>
        </form>
      </div>
    );}
    else {
      return (<Error2/>)
    }
  }
    
}

export default connect(
  (state) => {
    
    return {
      data: state.users.list,
    };
  },
  (dispatch) => {
    return bindActionCreators({ addUser }, dispatch);
  }
)(Register);
