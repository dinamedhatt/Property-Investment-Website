import Retirement from "./retirement";
import Carousel from "./carousel";
import DealSection from "./deal-section";

const Works = () => {
  return (
    <div>
      <div className="text-center row mt-5 col-12">
        <h1 className=" heading-one col-12">How it Works</h1>
        <p className=" mt-2  col-10   offset-xl-4 offset-1  col-xl-4 offset-xl-4 col-sm-6 offset-sm-3 mb-5">
          Tired of browsing through listings? Fed up with lengthy reports with
          irrelevent or outdated information? Property Deal Genie comes to
          rescue!
        </p>
      </div>

      {/* -----------------------------SECTION ONE--------------------------- */}
      <div className='row col-12 m-0 my-5 py-5'>
        <div className="position-relative col-xl-6 col-md-5 col-10 mt-5  offset-1 offset-md-1">
          <img src="images/works/1.png" alt="img1" className="col-11" />
          <img
            src="images/works/11.png"
            className="col-4 position-absolute"
            style={{ top: 110, right: 120 }}
            alt="img1-zoomed"
          />
        </div>

        <div className='col-xl-4 col-md-5 px-lg-5 mt-lg-4 mx-lg-2 col-10 offset-lg-1  ps-md-0 ps-5'>
            <div className='bg-warning py-1 mt-5 text-center' style={{width:"30px"}}>1</div>
            <h4 className='fw-bold my-3'>Apply heatmap to see the big picture</h4>
            <p className='pe-4'>at first when you define your requirement will send a map contains all location that is suitable to your investment.</p>
        </div>
      </div>


       {/* -----------------------------SECTION TWO--------------------------- */}
       <div className='row  col-12 m-0 my-5 py-5'>
        <div className=' col-10  col-md-5 col-lg-4 offset-lg-1 ps-md-3 offset-md-1 offset-1'>
            <div id="triangle-down" className=' py-1  mt-5 text-center' style={{width:"30px"}}></div>
            <h4 className='fw-bold my-3'>Use filters to see deals matching your criteria</h4>
            <p className='pe-4'> you can use filtration to reduce the time of search , find quickly and easily the suitable property that match with your requirement and your budget.</p>
        </div>

        <div className="position-relative col-10 col-md-6 col-lg-6 offset-lg-1 pt-5 offset-md-0 offset-1">
          <img src="images/works/2.png" alt="img2" className="col-11" />
          <img
            src="images/works/22.png"
            className="col-4  pt-5 position-absolute"
            style={{ top: -60, right: 120 }}
            alt="img2-zoomed"
          />
        </div>
      </div>


      {/* -----------------------------SECTION THREE--------------------------- */}
      <div className='row  col-12 m-0 my-5 py-5 '>
        <div className="position-relative col-xl-6 col-md-5 col-10 mt-5  offset-1 offset-md-1">
          <img src="images/works/3.png" alt="img3" className="col-11" />
          <img
            src="images/works/33.png"
            className="col-4 position-absolute"
            style={{ top: 110, right: 120 }}
            alt="img3-zoomed"
          />
        </div>

        <div className='col-xl-4 col-md-5 px-lg-5 mt-lg-4 mx-lg-2 col-10 offset-lg-1  ps-md-0 ps-5'>
            <div className='border border-warning py-2 mt-5  text-center' style={{width:"40px",borderRadius:'100%'}}>3</div>
            <h4 className='fw-bold my-3'>Analyze prospective area</h4>
            <p className='pe-4'>we will help you by do analysis about the location that you want to begin your investment there to ensure that is suitable and will be success investment.</p>
        </div>
      </div>


      <Retirement />

{/* -----------------------------SECTION FOUR--------------------------- */}
<div className='row  col-12 m-0 my-5 py-5'>
        <div className=' col-10  col-md-5 col-lg-4 offset-lg-1 ps-md-3 offset-md-1 offset-1'>
            <div className='bg-warning py-1  mt-5 text-center' style={{width:"30px"}}>4</div>
            <h4 className='fw-bold my-3'>Evaluate selected properties</h4>
            <p className='pe-4'>Careful analysis helps customers to avoid getting fooled and to find and choose the best and suitable property for them</p>
        </div>

        <div className="position-relative col-10 col-md-6 col-lg-6 offset-lg-1 pt-5 offset-md-0 offset-1">
          <img src="images/works/4.png" alt="img4" className="col-11" />
          <img
            src="images/works/44.png"
            className="col-4 position-absolute"
            style={{ top: -60, right: 120 }}
            alt="img4-zoomed"
          />
        </div>
      </div>


       {/* -----------------------------SECTION FIVE--------------------------- */}
       <div className='row  col-12 m-0 my-5 py-5'>
        <div className="position-relative col-xl-6 col-md-5 col-10 mt-5  offset-1 offset-md-1">
          <img src="images/works/5.png" alt="img5" className="col-11" />
          <img
            src="images/works/55.png"
            className="col-4 position-absolute"
            style={{ top: 110, right: 120 }}
            alt="img5-zoomed"
          />
        </div>

        <div className='col-xl-4 col-md-5 px-lg-5 mt-lg-4 mx-lg-2 col-10 offset-lg-1  ps-md-0 ps-5'>
        <div id="triangle-down-5" className='py-1 mt-5  text-center' style={{width:"30px"}}></div>
            <h4 className='fw-bold my-3'>Compute accurate ROI for the property</h4>
            <p className='pe-4'> you can compute the ROI by monthly cash flow, equity and future increase in value for each of the properties in your portfolio.</p>
        </div>
      </div>


      {/* -----------------------------SECTION SIX--------------------------- */}
<div className='row  col-12 m-0 my-5 py-5'>
        <div className=' col-10  col-md-5 col-lg-4 offset-lg-1 ps-md-3 offset-md-1 offset-1'>
        <div className='border border-warning  mt-5 py-2 text-center' style={{width:"40px",borderRadius:'100%'}}>6</div>
            <h4 className='fw-bold my-3'>Save your research and setup alerts</h4>
            <p className='pe-4'>we will help you by sending alert all the matched property with your requirement and your budget to choose what is suitable with you.</p>
        </div>

        <div className="position-relative col-10 col-md-6 col-lg-6 offset-lg-1 pt-5 offset-md-0 offset-1">
          <img src="images/works/6.png" alt="img6" className="col-11" />
          <img
            src="images/works/66.png"
            className="col-4 position-absolute"
            style={{ top: -60, right: 120 }}
            alt="img6-zoomed"
          />
        </div>
      </div>


        {/* -----------------------------SECTION Seven--------------------------- */}
        <div className='row  col-12 m-0 my-5 py-5'>
        <div className="position-relative col-xl-6 col-md-5 col-10 mt-5  offset-1 offset-md-1">
          <img src="images/works/7.png" alt="img7" className="col-11" />
          <img
            src="images/works/77.png"
            className="col-4 position-absolute"
            style={{ top: 110, right: 120 }}
            alt="img7-zoomed"
          />
        </div>

        <div className='col-xl-4 col-md-5 px-lg-5 mt-lg-4 mx-lg-2 col-10 offset-lg-1  ps-md-0 ps-5'>
        <div className='bg-warning py-1 mt-5  text-center' style={{width:"30px"}}>7</div>
            <h4 className='fw-bold my-3'>Find other trending areas using ranking</h4>
            <p className='pe-4'> we will help your investment to make it more successful by suggesting the best location suitable for your investment or suggest the kind of investment that is suitable for your location .</p>
        </div>
      </div>


      <Carousel />
      <DealSection />
    </div>
  );
};
export default Works;
