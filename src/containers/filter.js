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
      <div className="search-container row mx-auto col-8">
        &nbsp;
        <div className="col-8 mx-auto mt-5">
          <InputGroup>
            <Button variant="light" onClick={() => {
                this.props.onKeyWordsChange("");
              }}>
              <GoSearch />
            </Button>
            <FormControl
              placeholder="Search for anything.."
              onChange={this.filterText}
            />
            <Button
              variant="warning"
              onClick={() => {
                this.props.onKeyWordsChange("");
              }}
              className="px-5"
            >
              Find All
            </Button>
          </InputGroup>
        </div>
        <div className="col-8 mx-auto mt-4 mb-5">
          <InputGroup>
          <select className="form-select col-3"
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
          {/*  */}
          <select className="form-select col-3"
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

          <select className="form-select col-3" name="location" id="location"
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
