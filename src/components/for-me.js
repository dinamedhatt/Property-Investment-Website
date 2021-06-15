import Slider from "react-slick";

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
  

const ForMe = () =>{
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
      const headers = [
        'Find real estate below the market radar easily',
        'Stop wasting time checking listings day by day',
        'Focus on what matters for you',
        'Use filters to see deals matching your criteria',
        'Find a profitable investment before retirement',
        'Analyze and evaluate your benefits'
      ]
      const renderSlide = (header) =>[0, 1, 2, 3, 4 ,5].map(num => (
        <div key={num} className='p-5 mx-3'>
          <div className=' p-4' style={{backgroundColor:"#F3F3F4"}}>
        <img className='col-12' src={`images/Home/slider/${num}.png`} alt={`img${num}`}/>
        <h5 className='my-3 fw-bold'>{header[num]}</h5>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
        </div></div>
        ));
    
return (
<div>
      <h3 className='text-center mb-3'>Is this for me?</h3>
      <Slider className='col-11 m-auto' {...settings}>
        {renderSlide(headers)}
      </Slider>
      </div>

)
}

export default ForMe;