import { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import DealSection from "../components/deal-section";
class FAQ extends Component {
    constructor(){
        super()
        this.state={
          activeEventKey: "0",
        }  
    } 
      
    
    render() {
      return (
        <div>
           <section className="text-center my-5">
             <h1 className="heading-one">Frequently Asked Questions</h1>
            </section>
            <section className="row col-7 mx-auto text-left">
            <Accordion defaultActiveKey="0">
             <Card >
               
                <Accordion.Toggle as={Card.Header} eventKey="0"
                 {...(this.state.activeEventKey === "0" && {
                    style: { backgroundColor:"#143d8d",color:'white',fontWeight:"bold"}
                    })}
                 onClick={() => {this.setState({ activeEventKey: "0" })}}
                >
                   What’s the source of your properties?
                </Accordion.Toggle>
               
                <Accordion.Collapse eventKey="0">
                   <Card.Body >
                        We have 5 main sources. The first one is “Home Equity Loans”,
                        as most investors who are approaching retirement or already at retirement age have 
                        built up equity inside of their homes. The second one is “Retirement Accounts”, 
                        as there can be tax advantages to using retirement income and it is often best to 
                        speak with a financial advisor before withdrawals are made. Third one is “Private 
                        investors” that can be found through networking. Fourth one is “Partnerships” since it 
                        provides new methods of learning and could help offset the purchase of a first property. 
                        The last one is “Personal savings”, which is usually the last resort that investors use.
                   </Card.Body>
                </Accordion.Collapse>
             </Card>
             <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1"
                  {...(this.state.activeEventKey === "1" && {
                    style: { backgroundColor:"#143d8d",color:'white',fontWeight:"bold"}
                    })}
                  onClick={() => {this.setState({ activeEventKey: "1" })}}>
                    How frequently do you update the data?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        We have 5 main sources. The first one is “Home Equity Loans”,
                        as most investors who are approaching retirement or already at retirement age have 
                        built up equity inside of their homes. The second one is “Retirement Accounts”, 
                        as there can be tax advantages to using retirement income and it is often best to 
                        speak with a financial advisor before withdrawals are made. Third one is “Private 
                        investors” that can be found through networking. Fourth one is “Partnerships” since it 
                        provides new methods of learning and could help offset the purchase of a first property. 
                        The last one is “Personal savings”, which is usually the last resort that investors use.
                    </Card.Body>
                </Accordion.Collapse>
             </Card>
             <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2"
                  {...(this.state.activeEventKey === "2" && {
                    style:  { backgroundColor:"#143d8d",color:'white',fontWeight:"bold"}
                    })}
                 onClick={() => {this.setState({ activeEventKey: "2" })}}>
                    Do I need to actively search for new properties?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="body">
                        We have 5 main sources. The first one is “Home Equity Loans”,
                        as most investors who are approaching retirement or already at retirement age have 
                        built up equity inside of their homes. The second one is “Retirement Accounts”, 
                        as there can be tax advantages to using retirement income and it is often best to 
                        speak with a financial advisor before withdrawals are made. Third one is “Private 
                        investors” that can be found through networking. Fourth one is “Partnerships” since it 
                        provides new methods of learning and could help offset the purchase of a first property. 
                        The last one is “Personal savings”, which is usually the last resort that investors use.
                    </Card.Body>
                </Accordion.Collapse>
             </Card>
            </Accordion>
        </section>
        <section className="text-center my-5">
             <h3>Have other question?</h3>
             <input className='btn btn-medium btn-rounded px-3 mt-3' style={{backgroundColor:"white",border:"black 2px solid"}} type='button' value='Contact Us' onClick={()=>{this.props.history.push('/about')}}/>
        </section>
       <DealSection/>
    </div>
      );
    }
  }
  
  export default FAQ;