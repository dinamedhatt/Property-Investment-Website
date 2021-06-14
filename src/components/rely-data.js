import Slider from "react-slick";

const RelyData = ()=>{

    const settings=
    {
        infinite: true,
        slidesToShow: 7,
        // slidesToScroll:2,
        autoplay: true,
        swipeToSlide:true,
        arrows:false,
    }
    return(
        <div className='my-5'>
          <h3 className='text-center'>Data you can rely on</h3>
          <div className='my-5 col-12 m-0'>
          <Slider {...settings}>
              <div className='rounded bg-white pt-3  px-3 my-2 mx-5' id="slide">
                  <img className='col-7' src='images/data/sold price.png' alt='sold price'/>
                  <p className='lbl  mt-2'>Sold Price</p>
              </div>

              <div className='  rounded bg-white pt-3 px-3 my-2 mx-5' id="slide"> 
                  <img className='col-7' src='images/data/population.png' alt='population'/>
                  <p className='lbl  mt-2'>Population growth trend</p>
              </div>

              <div className='  rounded bg-white pt-3  px-3 my-2 mx-5' id="slide">
                  <img className='col-7' src='images/data/household.png' alt='household'/>
                  <p className='lbl  mt-2'>Avg household income</p>
              </div>

              <div className='  rounded bg-white pt-3  px-3 my-2 mx-5' id="slide">
                  <img className='col-7' src='images/data/per sq.png' alt='price per sq'/>
                  <p className='lbl  mt-2'>Price per sq ft</p>
              </div>

              <div className='  rounded bg-white pt-3 px-3 my-2 mx-5' id="slide"> 
                  <img className='col-7' src='images/data/population.png' alt='population'/>
                  <p className='lbl  mt-2'>Population growth trend</p>
              </div>

              <div className='  rounded bg-white pt-3  px-3 my-2 mx-5' id="slide">
                  <img className='col-7' src='images/data/sold price2.png' alt='sold price'/>
                  <p className='lbl  mt-2'>Sold Price</p>
              </div>
              
              <div className='  rounded bg-white pt-3  px-3 my-2 mx-5' id="slide">
                  <img className='col-7' src='images/data/household.png' alt='household'/>
                  <p className='lbl  mt-2'>Avg household income</p>
              </div>

              <div className='  rounded bg-white pt-3  px-3 my-2 mx-5' id="slide">
                  <img className='col-7' src='images/data/per sq.png' alt='price per sq'/>
                  <p className='lbl  mt-2'>Price per sq ft</p>
              </div>
              </Slider></div>
            
        </div>
    )
}

export default RelyData
