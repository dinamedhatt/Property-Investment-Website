import '../App.css';
import { NavLink } from "react-router-dom";

const Footer= () => {
  const linkStyle={
    textDecoration: "none",
    color:'black'
  }

  


    return ( 
    <div className="row col-12 pt-5 px-5 m-0 "style={{backgroundColor:"rgb(243, 243, 244)"}}>
        <div className="col-lg-3  offset-lg-1 col-md-5 offset-md-1 col-sm-10 pb-5">
        <table>
     <thead>
  <tr>
    <th id="footer-table-header">Product</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>  <NavLink exact to='/'  style={linkStyle}>Home</NavLink></td>
    <td> <NavLink to="/property"  style={linkStyle}>Property</NavLink></td>
    
  </tr>
  <tr>
    <td><NavLink to='/features'  style={linkStyle}>Features</NavLink></td>
    <td> <NavLink to="/pricing" style={linkStyle} >Pricing</NavLink></td>
    
  </tr>
  <tr>
     <td><NavLink to='how-to-works'  style={linkStyle}>How it works?</NavLink></td>      
  </tr>
  </tbody>
</table>
</div>
        <div  className="col-lg-4 ps-lg-5 col-md-6 col-sm-10  ">
        <table>
            <thead>
  <tr>
    <th id="footer-table-header">Company</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td> <NavLink to="/about"  style={linkStyle}>About us</NavLink></td>
  <td>  <NavLink to="/data-accuracy"  style={linkStyle}>Data Sources</NavLink></td>
    
  </tr>
  <tr>
  <td>   <NavLink to="/about"  style={linkStyle}>Contact</NavLink></td>
  <td>  <NavLink to="/faq"  style={linkStyle}>FAQ</NavLink></td>
    
  </tr>
  </tbody>
</table>
        </div>
        <div  className="col-lg-3 offset-lg-0 pt-lg-0 col-md-7 offset-md-3 pt-md-5 col-sm-10 pt-5 pb-5">
            Deal Genie Ltd is a property investment company,
             specialising in finding you the perfect property investment,
             as it provides a fully tailored property investment solution 
             for your exact requirements.</div>
    </div> );
}
 

export default Footer
;