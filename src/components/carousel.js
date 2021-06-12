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
    fade: true
  }
    
    return(
        <div className='py-5' style={{position:"relative"}}>
            <h3 className='text-center mb-5'>Why Industry Leaders<br/>Choose Us?</h3>

            <div className='bg-white row w-25 shadow rounded p-4' style={{position:"absolute",top:230, left:180, zIndex:1}}>
                <img src='images/carousel/ceo.png' alt='ceo' className='p-0 m-0'/>
                <p className='pt-3 lbl'>
                We believe now is always great time to be investing in property – regardless of short-term rises and drops, property is the single best asset class for returns!
                <br/><br/>A wise man once said “Don’t wait to buy, buy then wait…”
                </p><br/>
                <p className='text-secondary lbl pb-0 mb-0'>Mike Highnetworth</p>
            </div>

            <Slider className='m-auto col-11 mb-5' {...settings}>{renderSlides()}</Slider>
        </div>
    )
}

export default Carousel