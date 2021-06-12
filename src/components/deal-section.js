import JoinBtn from "./join-btn";

const DealSection = () => {
  return (
    <div
      className="py-5 row position-relative"
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


      <div
        className=" row bg-white col-sm-6 col-md-5 col-lg-3 rounded shadow p-3"
        style={{
          height: "fit-content",
          position: "absolute",
          top:"30%",
          left: "6%"
        }}
      >
        <img className="col-3 h-100 pt-3 img-fluid" src="images/user.png" alt="user" />
        <p className="col-9 d-inline pt-3">
          3 bed flat in London for $233,000
          <span className="text-secondary d-block" style={{fontSize:"13px"}}>
            Saved by John 3 days ago
          </span>
        </p>
      </div>


      <div className="text-center pb-3">
        <JoinBtn />
        <input
          className="btn btn-medium btn-rounded px-4 ms-5"
          style={{ backgroundColor: "white", border: "black 2px solid" }}
          type="button"
          value="How it works?"
        />
      </div>
    </div>
  );
};

export default DealSection;
