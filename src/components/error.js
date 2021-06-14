import { useHistory } from 'react-router-dom';

const Error = ()=>{
const history = useHistory();
const reDirect = () => history.push('/'); 
    
return(
        <div className='text-center position-relative p-5 my-4'>
            <h1 className='display-1 fw-bold position-absolute' style={{color:"#2b59b4",top:20,left:"52%"}}>404</h1>
            <h4 className='position-absolute px-4 py-2 bg-dark text-white' style={{top:"20%",left:"50%"}}>Page Not Found</h4>
            <img src='images/error.jpg' alt='error' className='img-fluid'/>
            <button className='btn btn-medium btn-rounded px-4 d-block mx-auto mt-4' style={{ backgroundColor: "#2b59b4", color: "white" }} onClick={reDirect}>Redirect to Home</button>
        </div>
    )
}
export default Error;