import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import JoinBtn from "../containers/join-btn";
import { NavLink } from "react-router-dom";

const NavBAR = () => {
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
          <Navbar.Brand className="col-lg-3 col-md-4 col-sm-6 col-7">
        <NavLink to="/">
            <img
              className="offset-1  img-fluid w-50 h-50 "
              src="images/logo.png"
              alt="Deal genie"
            />
        </NavLink>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" className="me-4" />
        <Navbar.Collapse id="navbarScroll" className="pt-4 ">
          <Nav className="mr-auto  my-2 my-lg-0  fs-5 " navbarScroll>
            <Nav.Link className="mx-auto mx-lg-3 ms-lg-0 ">
              <NavLink to='/' activeStyle={active} style={linkStyle}>Home</NavLink>
            </Nav.Link>
            <Nav.Link className="mx-auto mx-lg-3">
              <NavLink to='/features' activeStyle={active} style={linkStyle}>Features</NavLink>
            </Nav.Link>
            <Nav.Link className="mx-auto mx-lg-3">
              <NavLink to='how-to-works' activeStyle={active} style={linkStyle}>How it works?</NavLink>
            </Nav.Link>
            <NavDropdown
              style={{ textAlign: "center" }}
              className="mx-auto mx-lg-3 "
              title="More"
              id="navbarScrollingDropdown"
            >
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

          <div className="d-flex  flex-xl-row flex-lg-column  flex-xxl-nowrap  flex-xl-nowrap  flex-lg-nowrap">
            <div className="offset-xxl-9  offset-xl-3 offset-lg-2  mb-lg-2  mb-xl-0  mb-0 offset-md-4 offset-sm-3  offset-2">
              <JoinBtn />
            </div>

            <NavLink to="/login">
              <input
                className="ms-4  ms-lg-5 ms-xl-4 ms-xxl-2 px-4 px-lg-5 px-xl-2 px-xxl-4 btn btn-medium btn-rounded "
                style={{ backgroundColor: "white", border: "black 2px solid" }}
                type="button"
                value="Log in"
              />
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBAR;
