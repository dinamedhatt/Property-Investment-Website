import DataSlide from './data-slide'
const RelyData = ()=>{

    return(
        <div className='my-5'>
          <h3 className='text-center mb-5'>Data you can rely on</h3>
          <DataSlide 
          slide={['sold price','population','household','per sq']} 
          slideLbl={['Sold Price','Population growth trend','Avg household income','Price per sq ft']}
          scroll='1'
          /> 

          <DataSlide 
          slide={['occupation','yield','education','sold price2']} 
          slideLbl={['Occupation','Yield','Education','Sold Price']}
          scroll='-1'
          />  
        </div>
    )
}

export default RelyData
