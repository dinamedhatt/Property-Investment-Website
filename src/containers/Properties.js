import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getproperties } from "../actions";
import { BsSearch } from "react-icons/bs";
import { FaBookmark, FaRegBookmark, FaCoins } from "react-icons/fa";
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
      <div className="properties-container ">
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

        <div className="property-items-container">
          {this.state.propertiesList.map((property, key) => {
            return (
              <div className="property-item " key={key}>
                <span className="icon-container">
                  <IconContext.Provider
                    value={{ className: "item-react-icons" }}
                  >
                    <FaRegBookmark />
                  </IconContext.Provider>
                </span>
                <img
                  src={`/images/properties/${property.image}`}
                  alt="property"
                />
                <div className="property-item-info">
                  <div>
                    <h3>{property.name}</h3>
                    <p>
                      <IconContext.Provider
                        value={{ className: "money-react-icons" }}
                      >
                        <FaCoins />
                      </IconContext.Provider>
                      {property.budget}
                    </p>
                  </div>
                  <div>
                    <p>{property.propType}</p>
                    <input
                      type="button"
                      value="view"
                      className="property-view-btn btn btn-outline-dark"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    await this.props.getproperties(localStorage.getItem("jwt"));
    // console.log(this.props.propertiesList);
    // console.log(this.state.propertiesList);
    // const arr = this.props.propertiesList;
    this.setState({ propertiesList: this.props.propertiesList });
    console.log(this.state.propertiesList);
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
