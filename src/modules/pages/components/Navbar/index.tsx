import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../../../assets/logo-removebg-preview.png";

const CommonNavbar = () => {
  return (
    <div className="">
      <Navbar
        collapseOnSelect
        expand="lg"
        className=""
        style={{ backgroundColor: "#37a8ec" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img height={"80px"} src={logo} alt="ibsor" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Service</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <NavDropdown title="Doctor Profile" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Blog</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CommonNavbar;
