import { Navbar, Container, Nav } from 'react-bootstrap';
import './AppNavbar.CSS'; // Import your custom CSS file
import logo from './logo.webp';
const AppNavbar = () => {
  return (
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Container className="container-fluid container">
          <Navbar.Brand href="#" className="navbar-brand">
            {/*<div className="logo"> <img src={logo} alt="Logo" /> </div>*/}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#flashcards" className="nav-link">Flashcards</Nav.Link>
              <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login" className="nav-link">Login</Nav.Link>
              <Nav.Link href="#signup" className="nav-link">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default AppNavbar;
