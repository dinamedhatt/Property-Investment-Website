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
        <div className='py-5 row col-12' style={{position:"relative"}}>
            <h3 className='text-center mb-5'>Why Industry Leaders<br/>Choose Us?</h3>

            <div className='bg-white row col-xxl-3 d-md-flex d-none  col-xl-4 col-lg-5 col-md-7  shadow rounded pb-xxl-4 pb-md-3' style={{position:"absolute",top:220, left:180, zIndex:1}}>
                <img src='images/carousel/ceo.png' alt='ceo' className='  col-xxl-12 p-xxl-3  px-xl-5 pt-xl-2 offset-xl-0 pt-md-4 col-xl-12  col-lg-6  col-md-6 d-md-block d-none'/>
                <p className='pt-3 d-md-block d-none lbl col-xl-12 col-6'>
                We believe now is always great time to be investing in property – regardless of short-term rises and drops, property is the single best asset class for returns!
                <br/><br/>A wise man once said “Don’t wait to buy, buy then wait…”
                </p><br/>
                <p className='text-secondary col-xl-12 col-6  ms-xl-1 offset-md-6 d-md-block d-none  lbl pb-0 mb-0'>Mike Highnetworth</p>
            </div>

            <Slider className='m-auto col-11 mb-5' {...settings}>{renderSlides()}</Slider>
        </div>
    )
}

export default Carousel