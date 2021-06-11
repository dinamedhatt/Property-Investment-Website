const Sponsors = () => {
    return (
      <div className='text-center p-5'>
          <h3>Featured data providers</h3>
          <table className='m-auto my-5'>
              <tr>
                  <td><img src='images/sponsors/1.png' alt='sponsor'/></td>
                  <td><img src='images/sponsors/2.png' alt='sponsor'/></td>
                  <td><img src='images/sponsors/3.png' alt='sponsor'/></td>
              </tr>
              <tr>
                  <td><img src='images/sponsors/4.png' alt='sponsor'/></td>
                  <td><img src='images/sponsors/5.png' alt='sponsor'/></td>
                  <td><img src='images/sponsors/6.png' alt='sponsor'/></td>
              </tr>
          </table>
          <input class='btn btn-medium btn-rounded px-3' style={{backgroundColor:"white",border:"black 2px solid"}} type='button' value='See all available metrics'/>
  
      </div>
    );
  };
  
  export default Sponsors;
  