import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRcmd } from "../actions";

import { Button, InputGroup, FormControl } from "react-bootstrap";
import { GoSearch } from "@react-icons/all-files/go/GoSearch";

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      propType: "property type",
      investType: "investment type",
      location: "location",
      filteredList: [],
      name: "",
    };
  }

  filterText = (e) => {
    this.setState({ name: e.target.value });
    this.props.onKeyWordsChange(e.target.value);
  };

  handleChange = async (e) => {
    const { name, value } = e.target;
    await this.setState({ [name]: value });
    if (name === "propType") {
      await this.props.getRcmd(this.state.propType);
    } else if (name === "investType") {
      await this.props.getRcmd(this.state.investType);
    } else {
      await this.props.getRcmd(this.state.location);
    }

    this.setState({ filteredList: this.props.propertiesList });
    this.props.fiteredPropType(this.state.filteredList);
  };

  render() {
    return (
      <div className="search-container row mx-auto col-md-8 col-10">
        &nbsp;
        <div className="col-md-8 col-10 mx-auto mt-5">
          <InputGroup>
            <Button variant="light" onClick={() => {
                this.props.onKeyWordsChange("");
                this.setState({name:""})
              }}>
              <GoSearch />
            </Button>
            <FormControl
              value={this.state.name}
              placeholder="Search field"
              onChange={this.filterText}
              
            />
            <Button
              variant="warning"
              onClick={() => {
                this.props.onKeyWordsChange("");
                this.setState({name:""})
              }}
              className="px-lg-5 px-3"
            >
              Find All
            </Button>
          </InputGroup>
        </div>
        <div className="col-md-8 col-10 mx-auto mt-4 mb-5">
          <InputGroup>
          <div className="col-lg-4 mb-lg-0 col-12 mb-3">
          <select className="form-select "
            name="investType"
            id="investment-type"
            defaultValue={this.state.investType}
            onChange={this.handleChange}
          >
            <option value="investment-type" disabled>
              investment type
            </option>
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
            <option value="Partnership">Partnership</option>
          </select>
          </div>
          {/*  */}
          <div className="col-lg-4 mb-lg-0 col-12 mb-3">
          <select className="form-select "
            name="propType"
            id="property-type"
            defaultValue={this.state.propType}
            onChange={this.handleChange}
          >
            <option value="property-type" disabled>
              property type
            </option>
            <option value="Apartment">Apartment</option>
            <option value="Chalet">Chalet</option>
            <option value="Office">Office</option>
          </select>
          </div>
          <div className="col-lg-4 mb-lg-0 col-12 mb-3">
          <select className="form-select" name="location" id="location"
          defaultValue={this.state.location}
          onChange={this.handleChange}>
            <option value="location" disabled>
              location
            </option>
            <option value="England">England</option>
            <option value="Spain">Spain</option>
            <option value="Germany">Germany</option>
            <option value="Portugal">Portugal</option>
          </select>
          </div>
          </InputGroup>
        </div>
      </div>
    );
  }
  async componentDidMount() {}
}

export default connect(
  (state) => {
    console.log(state);
    return {
      propertiesList: state.properties.list, //function in properties reducer
    };
  },
  (dispatch) => {
    return bindActionCreators({ getRcmd }, dispatch);
  }
)(Filter);
