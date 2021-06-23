import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getproperties } from "../actions";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      propertiesList: [],
    };
  }

  render() {
    return (
      <div className="properties-container">
        <div className="search-container">
          &nbsp;
          <div className="searchBar-container">
            <IconContext.Provider
              value={{ className: "properties-react-icons" }}
            >
              <BsSearch />
            </IconContext.Provider>
            <input type="text" className="properties-searchBar" />
            <input type="button" value="find" className="properties-find-btn" />
          </div>
          <div className="filter-container">
            <select name="investment type" id="investment-type">
              <option value="investment-type" defaultValue disabled>
                investment type
              </option>
              <option value="Sale">Sale</option>
              <option value="Rent">Rent</option>
              <option value="Partnership">Partnership</option>
            </select>
            {/*  */}
            <select name="property type" id="property-type">
              <option value="property-type" defaultValue disabled>
                property type
              </option>
              <option value="Apartment">Apartment</option>
              <option value="Chalet">Chalet</option>
              <option value="Office">Office</option>
            </select>
            {/*  */}
            <select name="budget" id="budget">
              <option value="budget" defaultValue disabled>
                budget
              </option>
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
            {/*  */}
            <select name="location" id="location">
              <option value="location" defaultValue disabled>
                location
              </option>
              <option value="England">England</option>
              <option value="Spain">Spain</option>
              <option value="Germany">Germany</option>
              <option value="Portugal">Portugal</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
  async componentDidMount() {
    await this.props.getproperties();
    this.setState({ propertiesList: this.props.propertieslist });
  }
}

export default connect(
  (state) => {
    console.log(state);
    return {
      propertiesList: state.properties.list, //function in properties reducer
    };
  },
  (dispatch) => {
    return bindActionCreators({ getproperties }, dispatch);
  }
)(Properties);
