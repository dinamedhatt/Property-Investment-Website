import Carousel from './carousel'
import Sponsors from './sponsors'
import DealSection from './deal-section'
import Retirement from './retirement'
const Home = () => {
    return (
      <div>
    <div id="cover"  className="row col-12 m-0">
<div id="coverimg" className="img-fluid  ">
    <img src="images/home/coverpage.png" alt='cover' />
</div>

       <div className="text-center col-6 col-sm-6 col-md-6 col-lg-6 px-0 p-0"
       style={{
         
           color:"black",
          position: "absolute",
          top:"20%",
         left:"25%"
        }}>
       <h2 className=" fw-bold">
         Property deals
         <span className="d-block ">
           that find you
         </span>
       </h2>
     </div>
    
    
    <div id="animatio-one" 
        className="col-sm-3 row bg-white col-3  col-md-3 col-lg-3 rounded shadow  px-md-2 p-md-1 px-0 p-0 p-lg-0 m-0"
        style={{
          height: "fit-content",
          position: "absolute",
          top:"45%",
          left: "20%"
        }}
      >
        <img className="col-8 col-md-6 col-lg-5 col-xl-4 h-100 pt-3  pt-xl-2 img-fluid mt-lg-0 pt-lg-4 pt-md-3 ms-md-0 ms-sm-4 ms-3 pb-xxl-2" src="images/home/1.png" alt="score" />
        <p className="col-12 d-inline pt-3 fw-bold  fs-6 col-md-6 col-lg-7 col-xl-8 pt-lg-5 mt-lg-1 mt-xxl-3 pb-lg-3  pb-xl-2 pt-xl-4 text-center">
         Genie score
          <span className=" d-block fw-bold" style={{fontSize:"18px"}}>
           <span  style={{ color:"#FFC107"}}>87</span> / 100
          </span>
        </p>
      </div>
     
      <div id="animatio-two"
        className="col-sm-3 row bg-white col-3  col-md-3 col-lg-3 rounded shadow  px-md-2 p-md-1 px-0 p-0 p-lg-0 m-0"
        style={{
          height: "fit-content",
          position: "absolute",
          top:"70%",
          right: "20%"
        }}
      >
        <img className="col-8 col-md-6 col-lg-5 col-xl-4 h-100 pt-3  pt-xl-2 img-fluid mt-lg-0 pt-lg-4 pt-md-3 ms-md-0 ms-sm-4 ms-3 pb-xxl-2" src="images/home/2.png" alt="roi" />
        <p className="col-12 d-inline pt-3 fw-bold  fs-6 mt-lg-1 mt-xxl-3 col-md-6 col-lg-7 col-xl-8 pt-lg-5 pb-lg-3  pb-xl-2 pt-xl-4 text-center">
         Property ROI
          <span className=" d-block fw-bold" style={{fontSize:"18px"}}>
           <span  style={{ color:"#FFC107"}}>8.93%</span>
          </span>
        </p>
      </div>
      </div>
    <Retirement/>
    <Carousel/>
    <Sponsors/>
    <DealSection/>
</div>
);
}

export default Home;