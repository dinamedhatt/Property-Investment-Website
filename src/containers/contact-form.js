import { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div className="rounded border border-secondary row row col-6 offset-3 p-5 my-5">
        <div className="text-center my-3">
          <h3 className="fw-bold pb-3">Contact Us</h3>
          <p>
            Simply send as an email to:
            <br />{" "}
            <a href="mailto:info@dealgenieltd.co.uk?subject=Contact Deal Genie">
              info@dealgenieltd.co.uk
            </a>{" "}
            or use the form below
          </p>
        </div>

        <form className="row">
          <div className=" col-5 form-group">
            <label htmlFor="name" className="form-label lbl">
              Name
            </label>
            <input
              type="text"
              placeholder="John Smith"
              className="form-control"
              id="name"
            />
          </div>

          <div className=" col-6 offset-1 form-group">
            <label htmlFor="mail" className="form-label lbl">
              Email
            </label>
            <input
              type="email"
              placeholder="John.smith@email.com"
              className="form-control"
              id="mail"
            />
          </div>

          <div className="form-group my-4">
            <label htmlFor="subject" className="for-label lbl">
              Subject
            </label>
            <select className="form-select">
              <option selected disabled>
                Product question
              </option>
              <option value="feedback">Feedback</option>
              <option value="inquiry">Inquiry</option>
              <option value="payment">Payment</option>
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
            ></textarea>
          </div>

          <input
            type="submit"
            className="btn btn-rounded col-3 m-auto mt-5"
            style={{ backgroundColor: "#2b59b4", color: "white" }}
            value="Send"
          />
        </form>
      </div>
    );
  }
}

export default Contact;
