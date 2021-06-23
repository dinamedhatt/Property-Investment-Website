import Slider from "react-slick";
import { NavLink } from "react-router-dom";
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
  

const WishList = () =>{
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
      
      const renderSlide = () =>[0, 1, 2, 3, 4 ,5].map(num => (
        <div key={num} className='p-5 mx-3 '>
          <div className='rounded content' >
            <div className="content-overlay"></div>
            <img className='col-12 rounded ' src={`images/profile/${num}.png`} alt={`img${num}`} height="280px" />
            <div class="content-details fadeIn-top">
              <h3>One Bedroom Flat</h3>
              <NavLink style={{textDecoration:'none'}} to='/property-item'><p style={{color: "#fff" , fontSize: "1em"}}>View</p></NavLink>
            </div>
          </div>
        </div>
        ));
    
return (
    <div>
      <h2 className='text-center mb-3 mt-5'>WishList</h2>
      <Slider className='col-10 col-lg-11 m-auto' {...settings}>
        {renderSlide(NavLink)}
      </Slider>
    </div>

)
}

export default WishList ;