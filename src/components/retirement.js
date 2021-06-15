import JoinBtn from '../containers/join-btn'
const Retirement = () => {
    return (
      <div className='py-5 mb-sm-3 mb-5 position-relative'>
          <div className='p-5 position-absolute' style={{backgroundColor:"#e8f0ff", top:"22%",width:"100%", zIndex:0}}>
              <div className='col-xl-6 offset-xl-4 col-lg-6 offset-lg-5 px-lg-5 col-sm-6 offset-sm-6  px-sm-1  col-8 offset-4 ps-5 '>
              <h3>Thinking about early retirement?</h3>
              
              <p className='py-sm-3 py-0'>Beat old brick & morter investors sparing yourself tons  of
research and acieving your goals earlier</p>
              <JoinBtn/>
              </div>
          </div>
          <img src='images/retire.png' alt='retire' className='col-xl-3 col-lg-4 col-md-5 col-sm-5 col-5   offset-md-1 mt-xxl-0 mt-xl-4  mt-lg-4 mt-md-3 mt-5 pt-4 offset-0 px-md-0 ps-1 position-relative' style={{zIndex:1}}/>
      </div>
    );
  };
  
  export default Retirement;
  