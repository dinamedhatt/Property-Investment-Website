import { Component } from "react";
// import { Form } from 'react-bootstrap';

class Register extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        pass:"",
        fname:"",
        lname:""
      };
    }
    handleChange=(e)=>{
      const{name,value}=e.target;
      this.setState({[name]:value})
   }

   handelSumbit=(e)=>{
     e.preventDefault();
   }
 
    
    render() {
      return (
        <div className="parent" >
        {/*         welcom message             */}
          <section className=" welcomSection">
             <h1 className="heading-one">Welcome!</h1>
             <p>Sign up to continue</p>
          </section>
          <section className="bground"><img src='images/login.png' className="bg"/></section>
          {/*         form section  */}
           <form className="rounded border border-secondary row row col-6 offset-3 p-5 my-5 form">
           <div className=" row mb-2 form-group">
              <label htmlFor="fname" className="col-4 offset-2 form-label lbl fw-bold">
                First name
              </label>
              <label htmlFor="lname" className="col-4 offset-2 form-label lbl fw-bold">
                Last name
              </label>
              </div>
              <div className="row">
              <div className=" col-4 offset-2  mb-4 form-group">
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
              <div className="col-4 offset-2  mb-4 form-group">
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
            <div className=" mb-2 form-group col-4 offset-2">
              <label htmlFor="email" className="form-label lbl fw-bold">
                E-mail
              </label>
              </div>
              <div className=" mb-4 form-group col-8 offset-2">
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
            {/* <Form.Control.Feedback type="invalid" className="mb-3">
              Please enter a username.
      </Form.Control.Feedback> */}
            <div className=" col-4 offset-2 mb-2 form-group">
              <label htmlFor="pass" className="form-label lbl fw-bold">
                Password
              </label>
              </div>
              <div className=" col-8 offset-2 mb-4 form-group">
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
          
            <input
              type="submit"
              className="btn  col-3 m-auto "
              style={{ backgroundColor: "#2B59B4", color: "white" }}
              value="Sign Up"
              onChange={this.handelSumbit}
            />
            <div className="row">
            <p 
              className="col-8  m-auto mt-4"
              style={{  color: "#4A4A4A" }}>Don’t have an account? <a className="fw-bold"
                  style={{  color: "#2B59B4" ,textDecoration:"none"}} >Login In</a> now</p>
            </div>
          </form> 
        </div>
      );
    }
  }
  
  export default Register;