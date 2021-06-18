import DealSection from "./deal-section";
import Contact from "../containers/contact-form";
const About = () => {
  return (
    <div>
      <div className='text-center pt-5 row col-12'>
        <h1 className="heading-one col-12">About</h1>
        <p className='py-4 col-lg-5 col-md-7 col-sm-8 mx-auto px-5'>
        Our team is a fine blend of real estate investment practicioners,data nerds and people constantly thinking how to make things even simpler
        </p>
      </div>

      <div style={{backgroundColor:"#F3F3F4"}} className='row col-8 offset-2 mb-5 '>
          <img src='images/about.png' alt='about' className='col-lg-4 px-0'/>
          <div className='row col-12 col-lg-8 py-5 px-4 m-0'>
              <h3 className='fw-bold pb-3 '>Our Mission</h3>
              <p >Deal Genie’s mission is to provide a fully tailored property investment solution for customers’ exact requirements, by offering several services for the customer so that he can choose what suits him more.</p>
          </div>
      </div>

      <div className='row col-8 offset-2 mb-5 pb-5'>
          <div className='bg-white rounded shadow col-md-5 p-4 col-12'>
          <h3 className='fw-bold pb-3'>Background</h3>
          <p>Property investment company based in North East England. It has partnership and backgrounds in Wealth Management and Chartered Surveying.</p>
          </div>

          <div className='bg-white rounded shadow col-md-6 offset-md-1 mt-md-0 mt-3 col-12 offset-0 p-4'>
          <h3 className='fw-bold pb-3'>Key Values</h3>
          <p>Our values are our guiding light. They drive how we work together and how we show up for our community, and they shape what we aspire to be. They influence our business decisions and how we ultimately serve our customers.</p>
          </div>
      </div>

      <Contact/>
      <DealSection />
    </div>
  );
};

export default About;
