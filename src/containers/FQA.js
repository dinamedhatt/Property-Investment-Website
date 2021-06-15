import { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { withRouter } from 'react-router-dom';
import DealSection from "../components/deal-section";
class FQA extends Component {
    constructor(){
        super()
        this.state={
          activeEventKey: "0",
        }
        this. activeColor= "#143d8d";
        this.routeChange = this.routeChange.bind(this);
  
    } 
      
    routeChange() {
        let path = '/about';
        this.props.history.push(path);
      }
    
    render() {
      return (
        <div className="parent">
           <section className="fqa">
             <h1 className="heading-one">Frequently Asked Questions</h1>
            </section>
            <section className="row col-lg-6 col-sm-4 offset-lg-3 offest-sm-4 text-left ">
            <Accordion defaultActiveKey="0">
             <Card >
               
                <Accordion.Toggle as={Card.Header} eventKey="0" className="fw-bold "
                 {...(this.state.activeEventKey === "0" && {
                    style: { backgroundColor: this.activeColor }
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
                <Accordion.Toggle as={Card.Header} eventKey="1" className="fw-bold "
                  {...(this.state.activeEventKey === "1" && {
                    style: { backgroundColor: this.activeColor }
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
                <Accordion.Toggle as={Card.Header} eventKey="2" className="fw-bold "
                  {...(this.state.activeEventKey === "2" && {
                    style: { backgroundColor: this.activeColor }
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
        <section className="row col-12 text-center my-5">
             <h2>Have other question?</h2>
             <button className="my-3  col-2  offset-5 bttn" onClick={this.routeChange}>Contact Us</button>
        </section>
       <DealSection/>
    </div>
      );
    }
  }
  
  export default FQA;