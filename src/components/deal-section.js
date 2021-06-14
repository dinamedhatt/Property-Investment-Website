import JoinBtn from "../containers/join-btn";

const DealSection = () => {
  return (
    <div
      className="py-5 row col-12 m-0 position-relative"
      style={{ backgroundColor: " rgba(243, 243, 243, 0.53)" }}
    >
      <div className="text-center">
        <h3>
          Don't let others
          <span className="d-block fw-bold display-7">
            run off with your deals
          </span>
        </h3>
      </div>

<img src="images/deal.png" alt="deal" className="col-sm-8 col-md-6 col-lg-4 py-5 m-auto"/>


      <div id="animation-dealSection" 
        className="col-sm-3 row bg-white col-3  col-md-3 col-lg-4 rounded shadow  px-md-2 p-md-1 px-md-0 mx-3 p-0 p-lg-0"
        style={{
          height: "fit-content",
          position: "absolute",
          top:"26%",
          left: "5%",
          
        }}
      >
        <img className="col-8 col-md-8 col-lg-3 col-xl-3 h-100 pt-3 px-xxl-4 pt-xl-2 img-fluid mt-lg-0 pt-lg-3 pt-md-3 ms-lg-0 ms-sm-4 ms-3 pb-xxl-2 px-lg-2 px-md-4 px-sm-0 ms-md-4" src="images/user.png" alt="user" />
        <p className="col-12 d-inline pt-3 fw-bold  text-center fs-6 col-md-12 col-lg-9 col-xl-9 pt-lg-2 mt-lg-1 mt-xxl-3 pb-lg-0  pb-xl-2 pt-xl-2 ">
          3 bed flat in London for $233,000
          <span className="text-secondary text-center d-block" style={{fontSize:"13px"}}>
            Saved by John 3 days ago
          </span>
        </p>
      </div>


      <div className="text-center pb-3 d-flex">
        <div className='col-lg-2 offset-md-3 offset-lg-4 col-md-2 me-md-4  ps-md-4 me-lg-4 me-xl-0 ps-md-0 offset-sm-2 col-sm-2 ps-sm-4 offset-1 col-2 '><JoinBtn/></div>
        
        <div className='col-lg-2 ms-lg-3 col-md-3 ms-md-5 col-sm-8 col-9 ps-5 ps-md-0'><input
          className="btn btn-medium btn-rounded px-4"
          style={{ backgroundColor: "white", border: "black 2px solid" }}
          type="button"
          value="How it works?"
        /></div>
      </div>
    </div>
  );
};

export default DealSection;
