import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import JoinBtn from "../containers/join-btn";
import { NavLink,withRouter } from "react-router-dom";
import { Component } from "react";
import {FaUserAlt} from '@react-icons/all-files/fa/FaUserAlt'

class NavBAR extends Component{
  constructor(){
    super();
    this.state={
    }
  }


  render(){
  const active = {
    textDecoration: 'underline',
    textUnderlineOffset: '1rem',
    textDecorationThickness:'0.4rem',
    textDecorationColor:'#2b59b4',
    color:'black'
  };

  const linkStyle={
    textDecoration: "none",
    color:'rgba(0,0,0,.55)'
  }

  const dropDownStyle={
    textDecoration:"none",
    color:'black'
  }

  return (
    <div className="row  col-12 fixed-top  sticky-top  shadow-sm">
      <Navbar className="" bg="white" expand="lg">
          <Navbar.Brand className="col-lg-3 col-md-4 col-sm-6 col-7 ms-xxl-4">
        <NavLink to="/">
            <img
              className="offset-1  img-fluid w-50 h-50 "
              src="/images/logo.png"
              alt="Deal genie"
            />
        </NavLink>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="me-4" />
        <Navbar.Collapse id="navbarScroll" className=" pt-0 pt-lg-4">
          <Nav className="mr-auto col-xxl-7  col-xl-8 col-lg-9 col-md-12 my-2 my-lg-0 ms-xxl-5  ms-xl-0 fs-5 " navbarScroll>
            <Nav.Link className="mx-auto mx-lg-3 ms-xl-5 ms-lg-3">
              <NavLink exact to='/' activeStyle={active} style={linkStyle}>Home</NavLink>
            </Nav.Link>
            <Nav.Link className="mx-auto mx-lg-3" {...(!localStorage.getItem('jwt') && {style: { display:'none'}})}>
              <NavLink to={`/profile/${localStorage.getItem("id")}`} activeStyle={active} style={linkStyle}>Profile</NavLink>
            </Nav.Link>
            <Nav.Link className="mx-auto mx-lg-3">
              <NavLink exact to='/property' activeStyle={active} style={linkStyle}>Property</NavLink>
            </Nav.Link>
            <Nav.Link className="mx-auto mx-lg-3" {...(localStorage.getItem('jwt') && {style: { display:'none'}})}>
              <NavLink to='/features' activeStyle={active} style={linkStyle}>Features</NavLink>
            </Nav.Link>
            <NavDropdown
              style={{ textAlign: "center" }}
              className="mx-auto mx-lg-3 "
              title="More"
              id="navbarScrollingDropdown"
            >

              <NavDropdown.Item  {...(!localStorage.getItem('jwt') && {style: { display:'none'}})}>
              <NavLink to="/features" style={dropDownStyle}>Features</NavLink> </NavDropdown.Item> 
             
              <NavDropdown.Item>
              <NavLink to="/how-it-works" style={dropDownStyle}>How it Works</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <NavLink to="/faq" style={dropDownStyle}>FAQ</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/pricing" style={dropDownStyle}>Pricing</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/data-accuracy" style={dropDownStyle}>Data accuracy</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink to="/about" style={dropDownStyle}>About us</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/about" style={dropDownStyle}>Contact</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div {...(!localStorage.getItem('jwt') && {style: { display:'none'}})}>
            <div className=" d-flex col-xl-12 offset-xxl-11 offset-xl-9 me-xxl-4 me-xl-1">
            <FaUserAlt  className=" mb-lg-2 me-4 mb-xl-0 offset-lg-0  mt-2 offset-sm-5 offset-4" style={{fontSize:'22px',color:'#2B59B4',cursor:'pointer'}} onClick={()=>{this.props.history.push(`/profile/${localStorage.getItem("id")}`)}}/>
          <input
             id="allWhiteBtn"   className="  px-4 btn btn-medium btn-rounded"
              
                type="button"
                value="Log out"
                onClick={()=>{
                  localStorage.clear()
                  this.props.history.push('/')
                }}
              />
          </div>
          </div>
          <div {...(localStorage.getItem('jwt') && {style: { display:'none'}})}>
          <div className="d-flex  flex-xl-row flex-lg-column  flex-xxl-nowrap  flex-xl-nowrap  flex-lg-nowrap">
            <div className="offset-xxl-6  offset-xl-3 offset-lg-1  mb-lg-2  mb-xl-0  mb-0 offset-md-4 offset-sm-3  offset-2">
              <JoinBtn />
            </div>

              <input
               id="allWhiteBtn" 
                className="ms-4  ms-lg-3 ms-xl-4 ms-xxl-2 px-4 px-lg-5 px-xl-2 px-xxl-4 btn btn-medium btn-rounded"
             
                type="button"
                value="Log in"
                onClick={()=>{
                  this.props.history.push('/login')
                }}
              />
          </div></div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}; }
export default withRouter(NavBAR);
