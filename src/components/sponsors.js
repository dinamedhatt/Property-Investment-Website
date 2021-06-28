import { useHistory } from 'react-router-dom';


const Sponsors = () => {
    const history = useHistory();
    const reDirect = () => history.push('/data-accuracy'); 
    return (
      <div className='text-center p-5 '>
          <h3>Featured data providers</h3>
          <table className='  m-auto my-5'>
              <tbody>

              <tr className="row col-12">
                  <td className="col-sm-12 col-md-4"><img src='images/sponsors/1.png' alt='sponsor'/></td>
                  <td className="col-sm-12 col-md-4"><img src='images/sponsors/2.png' alt='sponsor'/></td>
                  <td className="col-sm-12 col-md-4"><img src='images/sponsors/3.png' alt='sponsor'/></td>
              </tr>
              <tr className="row col-12">
                  <td className="col-sm-12 col-md-4"><img src='images/sponsors/4.png' alt='sponsor'/></td>
                  <td className="col-sm-12 col-md-4"><img src='images/sponsors/5.png' alt='sponsor'/></td>
                  <td className="col-sm-12 col-md-4"><img src='images/sponsors/6.png' alt='sponsor'/></td>
              </tr>
              </tbody>
          </table>
          <input id="allWhiteBtn"  className=' btn btn-medium btn-rounded px-3' type='button' value='See all available metrics' onClick={reDirect}/>
  
      </div>
    );
  };
  
  export default Sponsors;
  