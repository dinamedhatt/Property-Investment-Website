import { useHistory } from 'react-router-dom';

const Error2 = ()=>{
const history = useHistory();
    
return(
    <div className='position-relative text-center p-5'>
    <img src='/images/theif.png' alt='authorize' className='img-fluid col-lg-5 col-md-7 col-sm-9'/>
    <div className='error-lights'></div>

    <div className='auth'>
    <h1 className='text-dark fw-bold'>Unauthorized<br/>Access</h1>
    <input id="allWhiteBtn"  type='button' className=' btn btn-medium btn-rounded px-4 d-block mx-auto mt-4' 
  onClick={()=>{
        if(localStorage.getItem("jwt")){history.push(`/profile/${localStorage.getItem("id")}`); }
        else{history.push(`/login`)}
    }} 
    {...(localStorage.getItem("jwt")) && {value:"Back to Profile"}}
    {...(!localStorage.getItem("jwt")) && {value:"Login Now"}}
    />
    </div>
    </div>
    )
}
export default Error2;



