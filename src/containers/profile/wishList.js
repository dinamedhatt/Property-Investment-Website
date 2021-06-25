import { Component } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWishlist } from '../../actions';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  

class WishList
 extends Component {
   constructor(){
     super();
     this.state = { 
       wishList:[]
      }
   }
  render() { 
    const settings ={ 
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:true,
            prevArrow: <Arrow/>,
            nextArrow: <Arrow/>,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }]
          }

          const renderSlide = () =>this.state.wishList.map(prop => (
                    <div key={prop.id} className='p-5 mx-3 '>
                      <div className='rounded content' >
                        <div className="content-overlay"></div>
                        <img className='col-12 rounded ' src={`/images/properties/${prop.image}`} alt={`img${prop.id}`} height="280px" />
                        <div className="content-details fadeIn-top">
                          <h3>{prop.name}</h3>
                          <NavLink style={{textDecoration:'none'}} to={`/property/${prop.id}`}><p style={{color: "#fff" , fontSize: "1em"}}>View</p></NavLink>
                        </div>
                      </div>
                    </div>
                    ));

    return ( 
      <div>

       { (this.state.wishList.length>0) && <div>
            <h2 className='text-center mb-3 mt-5'>WishList</h2>
            <Slider className='col-10 col-lg-11 m-auto' {...settings}>
              {renderSlide()}
            </Slider>
          </div> }
          </div>
     );
  }
  async componentDidMount(){
    await this.props.getWishlist(localStorage.getItem("id"))
    this.setState({wishList:this.props.wishlist})
  }
}
 
export default connect(
  (state) => {
    return {
      wishlist: state.users.list, //function in properties reducer
    };
  },
  (dispatch) => {
    return bindActionCreators({ getWishlist }, dispatch);
  }
)(WishList);