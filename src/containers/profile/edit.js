import { Component } from "react";
import {Modal,Button} from 'react-bootstrap'
import { FormErrors } from "./../formError";
import { connect } from "react-redux";
import {getUser,updateUser} from "../../actions";
import { bindActionCreators } from "redux";
import {Link} from 'react-router-dom'



class Edit extends Component{
    constructor(){
        super();
        this.state = {
            show:true,
            fname: "",
            lname: "",
            country: "",
            occupation:"",
            formErrors: {fname: "", lname: "" },
            fnameValid: false,
            lnameValid: false,
            formValid: false,
          };
        }
    
    lchange=false;
    fchange=false;
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let fnameValid = this.state.fnameValid;
        let lnameValid = this.state.lnameValid;
    
        switch (fieldName) {
          case "fname":
            fnameValid = value.match(/^([a-zA-Z]{3,})$/);
            fieldValidationErrors.fname =fnameValid ? ""
                : "*Names should be more than 3 characters without space and numbers";
                if(fnameValid){
                  this.fchange=false
                }
            break;
          case "lname":
            lnameValid = value.match(/^([a-zA-Z]{3,})$/);
            fieldValidationErrors.lname =lnameValid ? ""
                : "*Names should be more than 3 characters without space and numbers";
                if(lnameValid){
                  this.lchange=false
                }
            break;
    
          default:
            break;
        }
        this.setState(
          {
            formErrors: fieldValidationErrors,
            fnameValid: fnameValid,
            lnameValid: lnameValid,
          },
          this.validateForm
        );
      }
      validateForm() {
        this.setState({
          formValid:
            this.state.fnameValid &&
            this.state.lnameValid,
        });
      }
    

    handleChange = (e) => {
      
        const { name, value } = e.target;
        if(name==="lname"){
            this.lchange=true
        }
        if(name==="fname"){
           this.fchange=true
        }
        this.setState({ [name]: value }, () => {
          this.validateField(name, value);
        });
        
      };
      

    render(){
      var handleToUpdate = this.props.handleToUpdate;
        return(
            <Modal centered show={this.state.show}>
        <Modal.Header>
          <Modal.Title>Edit your profile</Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable="true">
          <div className="row mb-3 form-group ">
            <label
              htmlFor="fname"
              className="form-label col-4 offset-2 mb-2 lbl fw-bold"
            >
              First Name
            </label>
            <div className="col-sm-8 offset-sm-2  col-10 offset-2">
              <input
                type="text"
                value={this.state.fname}
                className="form-control"
                name="fname"
                id="fname"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className=" lbl text-secondary  text-center">
            <FormErrors formErrors={this.state.formErrors.fname} />
          </div>

          <div className="row mb-2 form-group ">
            <label
              htmlFor="lname"
              className="form-label col-4 offset-2 mb-2 lbl fw-bold"
            >
              Last Name
            </label>
            <div className="col-sm-8 offset-sm-2  col-10 offset-2">
              <input
                type="text"
                className="form-control"
                value={this.state.lname}
                name="lname"
                id="lname"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className=" lbl text-secondary  text-center">
            <FormErrors formErrors={this.state.formErrors.lname} />
          </div>

          <div className="row mb-2 form-group ">
            <label
              htmlFor="occupation"
              className="form-label col-4 offset-2 mb-2 lbl fw-bold"
            >
              Occupation
            </label>
            <div className="col-sm-8 offset-sm-2  col-10 offset-2">
              <input
                type="text"
                placeholder="Doctor"
                className="form-control"
                name="occupation"
                value={this.state.occupation}
                id="occupation"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row mb-2 form-group ">
            <div className="col-sm-8 offset-sm-2  col-10 offset-2">
            <label
              htmlFor="Country"
              className="form-label lbl fw-bold "
            >
              Country
            </label>
            <select
                className="form-select"
                name="country"
                defaultValue={this.state.country}
                value={this.state.country}
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
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button  disabled={this.lchange || this.fchange} style={{backgroundColor: "#2B59B4",color:"white"}} id='submit-btn' onClick={async () => {
        let user ={
            fname:this.state.fname,
            lname:this.state.lname,
            address:this.state.country,
            occupation:this.state.occupation
        }
          await this.props.updateUser(user,localStorage.getItem("id"));
          handleToUpdate(user,false)
          localStorage.setItem("location",user.address)
        }}>Save Changes</Button>
          <Button variant="secondary" as={Link} to={`/profile/${localStorage.getItem("id")}`} onClick={()=>{handleToUpdate({fname:this.state.fname,
            lname:this.state.lname,
            address:this.state.country,
            occupation:this.state.occupation},false)}}>Close</Button>
        </Modal.Footer>
      </Modal>
        )
    }

    async componentDidMount(){
        await this.props.getUser(localStorage.getItem('id'),localStorage.getItem('jwt'))
        const oldUser = this.props.user;
        this.setState({fname:oldUser.fname,lname:oldUser.lname,occupation:oldUser.occupation,country:oldUser.address})
    }
}

export default connect(
    (state) => {
      return {
        user: state.users.list,
      };
    },
    (dispatch) => {
      return bindActionCreators({ getUser,updateUser }, dispatch);
    }
  )(Edit);