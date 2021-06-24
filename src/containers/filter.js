import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getproperties } from "../actions";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import {Button,InputGroup,FormControl} from 'react-bootstrap'
import {GoSearch} from '@react-icons/all-files/go/GoSearch'

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      propertiesList: [],
    };
  }

  render() {
    return (
      <div className="search-container">
        &nbsp;
        {/* <div className="searchBar-container">
          <IconContext.Provider value={{ className: "properties-react-icons" }}>
            <BsSearch />
          </IconContext.Provider>
          <input type="text" className="properties-searchBar" />
          <input type="button" value="find" className="properties-find-btn" />
        </div> */}
        <div className="searchBar-container">
          <InputGroup>
            <Button variant="light"><GoSearch /></Button>
            <FormControl placeholder="Search for anything.." />
            <Button variant="warning" className="px-5">Find</Button>
          </InputGroup>
        </div>
        <div className="filter-container">
          <select
            name="investment type"
            id="investment-type"
            defaultValue="investment-type"
          >
            <option value="investment-type" disabled>
              investment type
            </option>
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
            <option value="Partnership">Partnership</option>
          </select>
          {/*  */}
          <select
            name="property type"
            id="property-type"
            defaultValue="property-type"
          >
            <option value="property-type" disabled>
              property type
            </option>
            <option value="Apartment">Apartment</option>
            <option value="Chalet">Chalet</option>
            <option value="Office">Office</option>
          </select>
          {/*  */}
          <select name="budget" id="budget" defaultValue="budget">
            <option value="budget" disabled>
              budget
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {/*  */}
          <select name="location" id="location" defaultValue="location">
            <option value="location" disabled>
              location
            </option>
            <option value="England">England</option>
            <option value="Spain">Spain</option>
            <option value="Germany">Germany</option>
            <option value="Portugal">Portugal</option>
          </select>
        </div>
      </div>
    );
  }
  async componentDidMount() {}
}

export default Filter;

// export default connect(
//   (state) => {
//     console.log(state);
//     return {
//       propertiesList: state.properties.list, //function in properties reducer
//     };
//   },
//   (dispatch) => {
//     return bindActionCreators({ getproperties }, dispatch);
//   }
// )(Properties);
