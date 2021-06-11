import '../App.css';
const Footer= () => {
 

    return ( 
    <div className="row col-12 pt-5 px-5 "style={{backgroundColor:"rgb(243, 243, 244)"}}>
        <div className="col-lg-3   offset-lg-1 col-md-5 offset-md-1 col-sm-10 pb-5">
        <table>
     <thead>
  <tr>
    <th id="footer-table-header">Product</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Home</td>
    <td>FAQ</td>
    
  </tr>
  <tr>
    <td>Features</td>
    <td>Pricing</td>
    
  </tr>
  <tr>
     <td>How it works</td>
      <td>Data Sources</td>
      
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
    <td>About us</td>
    <td>Contact</td>
    
  </tr>
  <tr>
    <td>Terms and conditions</td>
    <td>Privacy policy</td>
    
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