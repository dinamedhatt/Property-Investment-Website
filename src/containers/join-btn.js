import { useHistory } from "react-router";
const JoinBtn = () => {
  const history = useHistory();
  return (
    <div>

      {/* THE JOIN WAITLIST BTN */}
      <input
      id="allBlueBtn"
        className="btn btn-medium btn-rounded px-4"
        type="button"
        value="Join Us Now"
        onClick={()=>{
          if(localStorage.getItem("jwt")){alert("You are logged in, logout first if you want to register to another account.")}
          else{history.push('/register');}
        }}
      />

    </div>
  );
};

export default JoinBtn;
