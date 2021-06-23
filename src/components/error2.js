import { useHistory } from 'react-router-dom';

const Error2 = ()=>{
const history = useHistory();
const reDirect = () => history.push('/login'); 
    
return(
    <div className='position-relative text-center p-5'>
    <img src='/images/authorize.png' alt='authorize' className='img-fluid col-lg-5 col-md-7 col-sm-9'/>
    <button className='btn btn-medium btn-rounded px-4 d-block mx-auto mt-4 position-absolute' style={{ backgroundColor: "#2b59b4", color: "white",top:'50%',left:'40%'}} onClick={reDirect} >Login Now</button>
    </div>
    )
}
export default Error2;



