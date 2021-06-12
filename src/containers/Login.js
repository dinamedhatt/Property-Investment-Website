import { Component } from "react";

class Login extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        pass:""
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
             <h1 className="heading-one">Welcome Back!</h1>
             <p>Login to continue</p>
          </section>
          <section className="bground"><img src='images/login.png' className="bg"/></section>
          {/*         form section  */}
           <form className="rounded border border-secondary row row col-6 offset-3 p-5 my-5 form">
            <div className=" col-4 offset-2 mb-2 form-group">
              <label htmlFor="email" className="form-label lbl fw-bold">
                E-mail
              </label>
              </div>
              <div className=" col-8 offset-2 mb-4 form-group">
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
                id="pass"
                name="pass"
                required
                min="8"
                onChange={this.handleChange}
              />
            </div>
          
            <input
              type="submit"
              className="btn  col-3 m-auto "
              style={{ backgroundColor: "#2B59B4", color: "white" }}
              value="Login in"
              onChange={this.handelSumbit}
            />
            <div className="row">
            <p 
              className="col-8  m-auto mt-4"
              style={{  color: "#4A4A4A" }}>Don’t have an account? <a className="fw-bold"
                  style={{  color: "#2B59B4" ,textDecoration:"none"}} >Sign Up</a> now</p>
            </div>
          </form> 
        </div>
      );
    }
  }
  
  export default Login;
  