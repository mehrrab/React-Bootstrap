
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FOREGROUND } from "../../helpers/colors"
import { Link , Outlet } from 'react-router-dom';

const NavbarHeader =()=>{
    return(
        <Container className='mt-2'>
        <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Knight Studios</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}


            <Nav.Link ><Link to="/"><span style={{color:FOREGROUND}}><button>Home</button></span></Link></Nav.Link>
            <Nav.Link ><Link to="/about"><span style={{color:FOREGROUND}}><button>About</button></span></Link></Nav.Link>
            <Nav.Link ><Link to="/services"><span style={{color:FOREGROUND}}><button>Services</button></span></Link></Nav.Link>
            <Nav.Link ><Link to="/contact"><span style={{color:FOREGROUND}}><button>Contact</button></span></Link></Nav.Link>
            <Nav.Link ><Link to="/team2"><span style={{color:FOREGROUND}}><button>Team</button></span></Link></Nav.Link>


            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </Container>
    )
}
export default NavbarHeader