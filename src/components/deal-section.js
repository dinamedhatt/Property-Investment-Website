import JoinBtn from "./join-btn";

const DealSection = () => {
  return (
    <div
      className="py-5 row"
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

       <div
        className=" row bg-white col-sm-6 col-md-5 col-lg-3 rounded shadow p-3"
        style={{ height: "fit-content", position:"absolute", top:"15rem", left:"5rem" , "zIndex":"1" }}
      >
        <img className="col-3 p-3 img-fluid" src="images/user.png" alt="user"/>
          <p className="col-9 d-inline pt-3">
            3 bed flat in London for $233,000
            <span className="text-secondary d-block">
              Saved by John 3 days ago
            </span>
          </p>
      </div> 


      <img
        className="col-sm-8 col-md-6 col-lg-4 py-5"
        style={{ position: "relative",margin:"auto", "z-index":"0" }}
        src="images/deal.png"
        alt="deal"
      />

      <div className='text-center pb-3'>
      <JoinBtn/>
      <input class='btn btn-medium btn-rounded px-4 ms-5' style={{backgroundColor:"white",border:"black 2px solid"}} type='button' value='How it works?'/>
      </div>
    </div>
  );
};

export default DealSection;
