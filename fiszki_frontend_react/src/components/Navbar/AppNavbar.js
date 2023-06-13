import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './logoIcon.webp';
import './AppNavbar.css'

const AppNavbar = () => {
  return (
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Container className="container-fluid container">
          <Navbar.Brand href="/home" className="navbar-brand">
            <img src={logo} alt="logo" className='logo' />


          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="/flashcards" className="nav-link">Play</Nav.Link>
              <Nav.Link href="/manage" className="nav-link">Manage</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login" className="nav-link">Login</Nav.Link>
              <Nav.Link href="/signup" className="nav-link">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default AppNavbar;
