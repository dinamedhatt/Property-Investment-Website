import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getproperties,wishlistUser } from "..//actions";
import { FaBookmark, FaRegBookmark, FaCoins } from "react-icons/fa";
import { IconContext } from "react-icons";
import Filter from "./filter";
import WishList from './profile/wishList';


class Properties extends Component {
  constructor() {
    super();
    this.state = {
      propertiesList: [],
      wishList:[],
      filteredList:[]
      
    };
  }


//   this.setState({wishList:this.props.wishlist})
//   console.log("2",this.state.wishList)
//   let wishlist ={
//       wishlist:this.state.WishList
//   }
//  this.props.wishlistUser(wishlist,localStorage.getItem("id"));
// console.log("3",this.state.wishList)

  
  filterName = (name) => {
    const listt = this.state.propertiesList.filter((prop) => {
     return (prop.name.toLowerCase().includes(name.toLowerCase()));
        
    })
    this.setState({ filteredList: listt });
    console.log('filtername (user) - home:',this.state.filteredList);
}

  render() {
    return (
      <div className="properties-container ">
        <Filter onKeyWordsChange={this.filterName}/>
        <div className="property-items-container">
          {this.state.filteredList.map((property, key) => {
            return (
              <div className="property-item " key={key}>
                <span className="icon-container">
                  <IconContext.Provider
                    value={{ className: "item-react-icons" }}
                  >

                    <FaRegBookmark onClick={()=>{
                     
                      let propArr=[]
                      propArr.push(property)
                      this.setState({wishList:propArr})
                      this.props.wishlistUser(propArr,localStorage.getItem("id"))
                    }} id="#Bookmark"/>
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
    this.setState({ propertiesList: this.props.propertiesList, filteredList:this.props.propertiesList });
    console.log(this.state.propertiesList);


 
    };
}





export default connect(

  (state) => {
   
    return {
      propertiesList: state.properties.list, //function in properties reducer
      wishList:state.users.list
    };
  },
  (dispatch) => {
    return bindActionCreators({ getproperties,wishlistUser }, dispatch);
  }
)(Properties);

