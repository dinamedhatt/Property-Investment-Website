import { Component } from "react";
import axios from "axios";
import AlertMsg from "../components/alertMsg";
import { FormErrors } from './formError';
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "Product question",
      body: "",
      alert: "",
      color: "",
      formErrors: {email: ''},
      emailValid: false,
      formValid: false
    };
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    fieldValidationErrors.email = emailValid ? '' : '*Please write your e-mail in a correct format';
    this.setState({formErrors: fieldValidationErrors,
      emailValid: emailValid
    }, this.validateForm);
  }
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  setName = (e) => {
    this.setState({ name: e.target.value });
  };

  setMail = (e) => {
    this.setState({ email: e.target.value },
      () => { this.validateField(this.email, e.target.value) });
  };

  setSubject = (e) => {
    this.setState({ subject: e.target.value });
  };

  setBody = (e) => {
    this.setState({ body: e.target.value });
  };

  //to handle form
  formSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3100/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        this.resetForm();
        this.setState({ color: "success", alert: "message is sent"});
      } else if (response.data.status === "fail") {
        this.setState({ alert: "message is NOT sent!", color: "danger" });
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", body: "" });
  }

  render() {
    return (
      <div className="rounded border border-secondary  row  col-lg-6 offset-lg-3  col-10 offset-1  my-5">
        <div className="text-center col-12 m-0 py-3 mb-2 text-light" 
        style={{background:"linear-gradient(0deg, rgb(0 0 0 / 38%), rgb(0 0 0 / 80%)) 0% 0% / cover, no-repeat, url(/images/contact.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
          <h3 className="fw-bold pb-3 mt-4">Contact Us</h3>
          <p>
            Simply send as an email to:
            <br />{" "}
            <a href="mailto:dealgenie98@gmail.com?subject=Contact Deal Genie" style={{textDecoration:"none"}}>
            dealgenie98@gmail.com
            </a>{" "}
            or use the form below
          </p>
        </div>

        <form
          className="row col-12 p-5"
          onSubmit={this.formSubmit.bind(this)}
          method="POST"
        >
          <div className=" col-md-5 form-group">
            <label htmlFor="name" className="form-label lbl">
              Name
            </label>
            <input
              type="text"
              placeholder="John Smith"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.setName.bind(this)}
            />
          </div>

          <div className=" col-md-6 offset-md-1 mt-md-0 mt-4 form-group">
            <label htmlFor="mail" className="form-label lbl">
              Email
            </label>
            <input
              type="email"
              placeholder="John.smith@email.com"
              className="form-control"
              id="mail"
              value={this.state.email}
              onChange={this.setMail.bind(this)}
            />
            <div className="lbl text-secondary mt-3 mb-0 ">
              <FormErrors formErrors={this.state.formErrors.email} />
          </div>
          </div>
         

          <div className="form-group my-4">
            <label htmlFor="subject" className="for-label lbl">
              Subject
            </label>
            <select
              className="form-select"
              defaultValue={this.state.subject}
              onChange={this.setSubject.bind(this)}
            >
              <option disabled>Product question</option>
              <option value="Feedback">Feedback</option>
              <option value="Inquiry">Inquiry</option>
              <option value="Payment">Payment</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="body" className="form-label lbl">
              Message
            </label>
            <textarea
              className="form-control"
              placeholder="Leave your message here.."
              rows="5"
              value={this.state.body}
              onChange={this.setBody}
            ></textarea>
          </div>

          <div
            {...(this.state.alert === "" && {
              style: { display: "none" },
            })}
          >
            <AlertMsg color={this.state.color} msg={this.state.alert} />
          </div>

          <input
            type="submit"
            className="btn btn-rounded col-md-3 m-auto mt-5 mb-lg-0 mb-5 px-lg-0 px-5 col-6 "
            style={{ backgroundColor: "#2b59b4", color: "white" }}
            value="Send"
          />
        </form>
        <div className="text-center my-5 col-10 mx-auto">
          <h3 className="pb-2">Contact details</h3>
          <p style={{color:"#AEAEAE"}}>
            Property deal gennie co ltd
            23A#43  Downing Street
            43423 Wellington,UK
            VAT ID:35344355
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
