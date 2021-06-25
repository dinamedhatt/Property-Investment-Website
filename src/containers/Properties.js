import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getproperties,wishlistUser,unlikeUser,getWishlist } from "..//actions";
import { FaBookmark, FaRegBookmark, FaCoins } from "react-icons/fa";
import { IconContext } from "react-icons";
import {Alert} from 'react-bootstrap'
import Filter from "./filter";
import WishList from './profile/wishList';


class Properties extends Component {
  constructor() {
    super();
    this.state = {
      propertiesList: [],
      wishList:[],
      filteredList:[],
      likedList:[],
      icon:<FaRegBookmark/>,
      favorite:false
    };
  }

  
  filterName = (name) => {
    const listt = this.state.propertiesList.filter((prop) => {
     return (prop.name.toLowerCase().includes(name.toLowerCase()));     
    })
    this.setState({ filteredList: listt });
    console.log('filtername (user) - home:',this.state.filteredList);
}

filterPropType = (prop)=>{
  const list = prop;
  this.setState({filteredList:list})
}

  render() {
    return (
      <div className="properties-container ">
        <Filter onKeyWordsChange={this.filterName} fiteredPropType={this.filterPropType}/>
        { (this.state.filteredList.length>0) &&
        <div className="property-items-container">
          {this.state.filteredList.map((property, key) => {
            return (
              <div className="property-item " key={key}>
                <span className="icon-container"  onClick={()=>{
             let theRepeatedId = this.state.likedList.filter(prop => prop.id === property.id)
              if(this.state.favorite===false){
                
                this.setState({
                  icon:<FaBookmark/>,
                  favorite:true
                })
                let propArr=[]
                      propArr.push(property)
                      this.setState({wishList:propArr})
                      this.props.wishlistUser(propArr,localStorage.getItem("id"))
                      console.log("hhhh",this.state.likedList)
              }

              else{
                this.setState({
                icon:<FaRegBookmark/>,
                favorite:false
                })
                let obj = {id:property.id}
                this.props.unlikeUser(obj,localStorage.getItem("id"))
                console.log(obj)
                console.log(this.state.likedList)
                
              }




                }}>
                  <IconContext.Provider
                    value={{ className: "item-react-icons" }}
                  >
                    {this.state.icon}
                    {/* < FaRegBookmark onClick={()=>{ 
                     // aa 3aiza en kolo ykoun abiad law dost 3ala wa7ed el id da bas howa el yob2a eswed yob2a 3aiza a check if en law gdid mesh flList y7sal chage w yob2a eswed else law el id exist fl list yefdal eswed
//elseTayalawEswedifId==idFelListChagetoWhiteAndDelete
                      let propArr=[]
                      propArr.push(property)
                      this.setState({wishList:propArr})
                      this.props.wishlistUser(propArr,localStorage.getItem("id"))
                    }} id="#Bookmark"/>

                  <FaBookmark onClick={()=>{ 
                     let obj = {id:property.id}
                    this.props.unlikeUser(obj,localStorage.getItem("id"))
                    console.log(obj)
                    console.log(this.state.likedList)
console.log("filter",this.state.likedList.filter(prop => prop.id === property.id))
let theRepeatedId = this.state.likedList.filter(prop => prop.id === property.id)
// if(theRepeatedId.length===0){
//   console.log("hait3'air")
// }
// else{"meshhai7sal7aga"} */}
              
                  {/* }} id="#Bookmark"/> */}



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
                      onClick={()=>{window.location.assign(`/property/${property.id}`)}}
                      className="property-view-btn btn btn-outline-dark"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>}

        {(this.state.filteredList.length===0) && 
        <Alert variant="warning" className='p-4 mt-5'>
        <Alert.Heading>No properties are available in the selected category for the moment</Alert.Heading>
        <p>If you are interested in investing in other categories, feel free to check the rest of our properties</p>
      </Alert>
        }
      </div>
    );
  }
  async componentDidMount() {
    await this.props.getproperties();
    this.setState({ propertiesList: this.props.propertiesList, filteredList:this.props.propertiesList });
    console.log(this.state.propertiesList);

    await this.props.getWishlist(localStorage.getItem("id"));
    this.setState({likedList:this.props.userLikes});
    console.log('LIKED!',this.state.likedList)
 
    };
}





export default connect(

  (state) => {
   
    return {
      propertiesList: state.properties.list, //function in properties reducer
      userLikes:state.users.list
    };
  },
  (dispatch) => {
    return bindActionCreators({ getproperties,wishlistUser,unlikeUser,getWishlist }, dispatch);
  }
)(Properties);

