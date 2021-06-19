import { useHistory } from "react-router";
const JoinBtn = () => {
  const history = useHistory();
  return (
    <div>

      {/* THE JOIN WAITLIST BTN */}
      <input
        className="btn btn-medium btn-rounded px-4"
        style={{ backgroundColor: "#2b59b4", color: "white" }}
        type="button"
        value="Join Us Now"
        onClick={()=>{history.push('/register');}}
      />

    </div>
  );
};

export default JoinBtn;
