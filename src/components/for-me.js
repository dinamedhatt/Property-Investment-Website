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
        'Focus on what really matters for a better future',
        'Use filters to see deals matching your criteria',
        'Find a profitable investment before retirement',
        'Analyze and evaluate what can truly benefit you'
      ]
      const paras = [
        'Instead of asking neighbours and hiring agents to know when properties can be available for sale',
        'If you want to avoid checking news and journals listings day by day to find proper property for investment',
        'If you want to find what suits your budget and what have better potential for investment than the others',
        'Filtration of available properties makes you set your needs and helps you find what actually meets them',
        'Instead of keeping your savings in the bank after retirement, you can invest with them in profitable propeties',
        'Careful analysis helps customers to avoid getting fooled and to find the best investment for them'
      ]
      const renderSlide = (header,para) =>[0, 1, 2, 3, 4 ,5].map(num => (
        <div key={num} className='p-5 mx-3'>
          <div className='rounded p-4' style={{backgroundColor:"#F3F3F4"}}>
        <img className='col-12' src={`images/Home/slider/${num}.png`} alt={`img${num}`}/>
        <h5 className='my-3 fw-bold'>{header[num]}</h5>
        <p>{para[num]}</p>
        </div></div>
        ));
    
return (
<div>
      <h3 className='text-center mb-3 mt-5'>Is this for me?</h3>
      <Slider className='col-10 col-lg-11 m-auto' {...settings}>
        {renderSlide(headers,paras)}
      </Slider>
      </div>

)
}

export default ForMe;