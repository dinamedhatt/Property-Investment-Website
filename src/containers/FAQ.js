import { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import DealSection from "../components/deal-section";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getfaq} from '../actions'

class FAQ extends Component {
    constructor(){
        super()
        this.state={
          activeEventKey: "0",
          faqList:[]
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
             {
                this.state.faqList.map((ques,key)=>{
                   return(
                     <Card key={key}>
               
                     <Accordion.Toggle as={Card.Header} eventKey={key+1}
                      {...(this.state.activeEventKey === key+1 && {
                         style: { backgroundColor:"#143d8d",color:'white',fontWeight:"bold"}
                         })}
                      onClick={() => {this.setState({ activeEventKey: key+1 })}}
                     >
                        {ques.question}
                     </Accordion.Toggle>
                    
                     <Accordion.Collapse eventKey={key+1}>
                        <Card.Body >
                             {ques.answer}
                        </Card.Body>
                     </Accordion.Collapse>
                  </Card>
                   )
                })
             }
            </Accordion>
        </section>
        <section className="text-center my-5">
             <h3>Have other question?</h3>
             <input id="allWhiteBtn"  className=' btn btn-medium btn-rounded px-3 mt-3' type='button' value='Contact Us' onClick={()=>{this.props.history.push('/about')}}/>
        </section>
       <DealSection/>
    </div>
      );
    }
    async componentDidMount() {
      await this.props.getfaq();
      this.setState({ faqList: this.props.faqlist });
    }

  }
  
  export default connect(
        (state) => {
          
          return {
            faqlist: state.faqs.list  //function in faq reducer
          };
        },
        (dispatch) => {
          return bindActionCreators({getfaq}, dispatch);
        }
     )
 (FAQ);
