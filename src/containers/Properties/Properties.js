import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getproperties,
  wishlistUser,
  unlikeUser,
  getWishlist,
} from "../../actions";
import { FaCoins } from "react-icons/fa";
import {BsBookmarkPlus,BsBookmarkFill} from 'react-icons/bs'
import { IconContext } from "react-icons";
import { Alert } from "react-bootstrap";
import Filter from "./filter";
class Properties extends Component {
  constructor() {
    super();
    this.state = {
      propertiesList: [],
      wishList: [],
      filteredList: [],
      likedList: [],
    };
  }

  filterName = (name) => {
    const listt = this.state.propertiesList.filter((prop) => {
      return prop.name.toLowerCase().includes(name.toLowerCase());
    });
    this.setState({ filteredList: listt });
  };

  filterPropType = (prop) => {
    const list = prop;
    this.setState({ filteredList: list });
  };

  wishlistFunc=async ()=>{
     if (localStorage.getItem("jwt")) {
      await this.props.getWishlist(localStorage.getItem("id"));
      this.setState({ likedList: this.props.userLikes });
    }

  }

  render() {
    return (
      <div className="properties-container">
        <Filter
          onKeyWordsChange={this.filterName}
          fiteredPropType={this.filterPropType}
        />
        {this.state.filteredList.length > 0 && (
          <div className="property-items-container">
            {this.state.filteredList.map((property, key) => {
              return (
                <div className="property-item " key={key}>
                  <span className="icon-container">
                    <IconContext.Provider
                      value={{ className: "item-react-icons" }}
                    >
                      <BsBookmarkPlus
                        style={{ display: "block" }}
                        // eslint-disable-next-line eqeqeq
                        {...(this.state.likedList.filter(
                          (prop) => prop.id === property.id
                        ).length == 1 && { style: { display: "none" } })}
                        onClick={() => {
                          let propArr = [];
                          propArr.push(property);
                          this.setState({ wishList: propArr }, function () {
                            this.wishlistFunc()
                          });
                          this.props.wishlistUser(localStorage.getItem("jwt"),
                            propArr,
                            localStorage.getItem("id")
                          );
                        }}
                      />

                      <BsBookmarkFill
                        style={{ display: "none" }}
                        // eslint-disable-next-line eqeqeq
                        {...(this.state.likedList.filter(
                          (prop) => prop.id === property.id
                        ).length == 1 && { style: { display: "block" } })}
                        onClick={() => {
                          let obj = { id: property.id };
                          this.props.unlikeUser(localStorage.getItem("jwt"),
                            obj,
                            localStorage.getItem("id")
                            );
                            this.wishlistFunc()
                        }}
                      />
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
                    <div className="" style={{ textAlign: "right" }}>
                      <p>{property.propType}</p>
                      <input
                        type="button"
                        value="view"
                        onClick={() => {
                          this.props.history.push(`/property/${property.id}`);
                        }}
                        className=" property-view-btn btn btn-outline-dark"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {this.state.filteredList.length === 0 && (
          <Alert variant="warning" className="p-4 mt-5">
            <Alert.Heading>
              No properties are available in the selected category for the
              moment
            </Alert.Heading>
            <p>
              If you are interested in investing in other categories, feel free
              to check the rest of our properties
            </p>
          </Alert>
        )}
      </div>
    );
  }
  async componentDidMount() {
    await this.props.getproperties();
    this.setState({
      propertiesList: this.props.propertiesList,
      filteredList: this.props.propertiesList,
    });

    if (localStorage.getItem("jwt")) {
      await this.props.getWishlist(localStorage.getItem("id"));
      this.setState({ likedList: this.props.userLikes });
    }
  }
}

export default connect(
  (state) => {
    return {
      propertiesList: state.properties.list, //function in properties reducer
      userLikes: state.users.list,
    };
  },
  (dispatch) => {
    return bindActionCreators(
      { getproperties, wishlistUser, unlikeUser, getWishlist },
      dispatch
    );
  }
)(Properties);
