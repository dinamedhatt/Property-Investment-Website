import JoinBtn from '../containers/join-btn'
const Retirement = () => {
    return (
      <div className='py-5 position-relative'>
          <div className='p-5 position-absolute' style={{backgroundColor:"#e8f0ff", top:"22%",width:"100%", zIndex:0}}>
              <div className='col-lg-6 offset-lg-4 px-lg-5 col-md-5 offset-md-6 col-sm-12'>
              <h3>Thinking about early retirement?</h3>
              <p className='py-3'>Beat old brick & morter investors sparing yourself tons  of
research and acieving your goals earlier</p>
              <JoinBtn/>
              </div>
          </div>
          <img src='images/retire.png' alt='retire' className='col-lg-3 col-md-4 d-sm-none d-md-block offset-1 position-relative' style={{zIndex:1}}/>
      </div>
    );
  };
  
  export default Retirement;
  