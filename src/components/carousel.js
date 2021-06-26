import Slider from "react-slick";

const Carousel = ()=>{
    const renderSlides = () =>
    [1, 2, 3].map(num => (
      <div key={num}>
        <img className='col-12 m-0' src={`images/carousel/${num}.png`} alt={`slide${num}`}/>
      </div>));

const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    arrows:false
  }
    
    return(
        <div className='py-5 m-0 row col-12' style={{position:"relative"}}>
            <h3 className='text-center mb-5'>Why Industry Leaders<br/>Choose Us?</h3>

            <div  id="carouselPara" className='bg-white row col-xxl-3 col-xl-4 col-lg-5  m-lg-0 col-11 m-auto mb-3 shadow rounded pb-xxl-4 pb-lg-3 pb-lg-2 mt-xl-0 mt-lg-3 pb-md-3' >
                <img src='images/carousel/ceo.png' alt='ceo' className='  col-xxl-12 p-xxl-3  px-xl-5 pt-xl-2 offset-xl-0 pt-md-4 col-xl-12  col-lg-6  col-md-6 '/>
                <p className='pt-4  lbl col-xl-12 col-lg-6 col-md-5 ms-md-3 ms-lg-0 col-12'>
                We believe now is always great time to be investing in property – regardless of short-term rises and drops, property is the single best asset class for returns!
                <br/><br/>A wise man once said “Don’t wait to buy, buy then wait…”
                <span className="text-secondary d-block pt-4">Mike Highnetworth</span>
                </p><br/>
                
            </div>

            <Slider className='m-auto col-11 mb-5' {...settings}>{renderSlides()}</Slider>
        </div>
    )
}

export default Carousel