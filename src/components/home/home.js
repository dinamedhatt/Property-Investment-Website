import Carousel from "../carousel";
import Sponsors from "../sponsors";
import DealSection from "../deal-section";
import Retirement from "../retirement";
import Divider from "./divider/divider";
import ForMe from "./for-me";
import RelyData from "../rely-data/rely-data";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const reDirect = () => history.push('/features'); 
  return (
    <div>
      <div id="cover" >
        <div id="coverimg">
          <img src="images/home/coverpage.png" alt="cover" />
        </div>

        <div id="paracover"
          className="text-center col-8 col-sm-6 col-md-6 col-lg-6 px-0 p-0"
        
        >
          <h1 className="display-5">
            Property deals
            <span className="d-block ">that find you</span>
          </h1>
        </div>

        <div
          id="animatio-one"
          className="col-3 row bg-white  rounded shadow p-0 m-0"
          style={{
            height: "fit-content",
            position: "absolute",
            top: "44%",
            left: "20%",
          }}
        >
          <img
            className="col-8 col-md-5 col-lg-5 col-xl-4 h-100 pt-3  pt-xl-2 img-fluid mt-lg-0 pt-lg-2 pt-md-3 ms-md-0 ms-sm-4 ms-3 pb-xxl-2"
            src="images/home/1.png"
            alt="score"
          />
          <p  className="col-12 d-inline pt-3 fw-bold  fs-6 col-md-7 col-lg-7 col-xl-8  pt-md-3 pt-lg-4 mt-lg-1 mt-xxl-3 pb-lg-3  pb-xl-2 pt-xl-4 text-center">
            Genie score
            <span className=" d-block fw-bold" style={{ fontSize: "1rem" }}>
              <span style={{ color: "#FFC107" }}>87</span> / 100
            </span>
          </p>
        </div>

        <div
          id="animatio-two"
          className="row bg-white col-3 rounded shadow p-0 m-0"
          style={{
            height: "fit-content",
            position: "absolute",
            top: "73%",
            right: "20%",
          }}
        >
          <img
            className="col-8  col-md-5  col-lg-5 col-xl-4 h-100 pt-3  pt-xl-2 img-fluid mt-lg-0 pt-lg-2 pt-md-3 ms-md-0 ms-sm-4 ms-3 pb-xxl-2"
            src="images/home/2.png"
            alt="roi"
          />
          <p  className="col-12 d-inline pt-3 fw-bold  fs-6 mt-lg-1 mt-xxl-3 col-md-7 col-lg-7 col-xl-8 pt-lg-4 pb-lg-3 pt-md-3  pb-xl-2 pt-xl-4 text-center">
            Property ROI
            <span className=" d-block fw-bold" style={{ fontSize: "1rem" }}>
              <span style={{ color: "#FFC107" }}>8.93%</span>
            </span>
          </p>
        </div>
      </div>
      <ForMe/>
      <Divider />
      <Retirement />
      <Carousel />


      {/* -----------------Features you'll love section---------------------- */}

      <div className="row m-0 col-12 ps-5">
  <h3 className="text-center mb-5">Features you’ll love</h3>
{/* ---------partOne------------ */}
  <div className="row col-lg-4 col-md-6 col-11 offset-md-0 offset-1">
  <img className="col-3 col-sm-2 col-md-4 col-lg-5 col-xl-5 col-xxl-4 h-100 img-fluid p-xl-4 py-lg-5 py-md-5 py-5" src="images/home/2.png" alt="score" />
        <p className=" fw-bold  fs-6 col-8 col-md-7  col-lg-7 col-xl-7  mt-lg-1 mt-xxl-3 pb-xl-2 pt-xl-4 pt-lg-5 mt-md-1 pt-md-5 mt-1 pt-5">
        ROI Computation
          <span className=" d-block " style={{fontSize:"12px"}}>
          We can calculate the return on investment for you based on your initial investment
          </span>
        </p>
  </div>
  
{/* ---------partTwo------------ */}
<div className="row col-lg-4 col-md-6 col-11 offset-md-0 offset-1">
<img className="col-3 col-sm-2 col-md-4 col-lg-5 col-xl-5 col-xxl-4 h-100 img-fluid p-xl-4 py-lg-5 py-md-5 py-5" src="images/home/1.png" alt="score" />
        <p className="fw-bold  fs-6 col-8 col-md-7  col-lg-7 col-xl-7  mt-lg-1 mt-xxl-3 pb-xl-2 pt-xl-4 pt-lg-5  mt-md-1 pt-md-5 mt-1 pt-5">
        Genie Score          <span className=" d-block " style={{fontSize:"12px"}}>
        You can score points based on the return you get and on the investment you make
          </span>
        </p>
  </div>
{/* ---------partThree------------ */}
   <div className="row col-lg-4 col-md-12 col-11 offset-md-0 offset-1">
   <img className="col-3 col-sm-2 col-md-2 col-lg-5 col-xl-5 col-xxl-4 h-100 img-fluid p-xl-4 py-lg-5 py-md-5 py-5" src="images/home/3.png" alt="score" />
        <p className="fw-bold  fs-6 col-8 col-md-5  col-lg-7 col-xl-7  mt-lg-1 mt-xxl-3 pb-xl-2 pt-xl-4 pt-lg-5 mt-md-1 pt-md-5 mt-1 pt-5">
        Area and property filters          <span className=" d-block " style={{fontSize:"12px"}}>
        You can filter the available investments based on the area you prefer
          </span>
        </p>
  </div>
  <h6 className=" text-center fw-bold mt-5">And many more..</h6>
  <div  className="text-center"><input
          className="btn btn-medium btn-rounded px-4 mt-3"
          style={{ backgroundColor: "white", border: "black 2px solid" }}
          type="button"
          value="Check all features"
          onClick={reDirect}
        /></div>
</div>

      <RelyData/>
      <Sponsors />
      <DealSection />
    </div>
  );
};

export default Home;
