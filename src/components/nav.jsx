import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function PortfolioNavBar() {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container fluid>

        <Navbar.Brand  className='text-uppercase' href="#">Jhon Doe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
        <Nav className="ms-auto">
            <NavLink 
            to="/" className='nav-link text-uppercase'
              style={({ isActive }) => ({
              color: isActive ? 'white' : 'white',
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: isActive ? 'underline' : 'none',
            })}
            > Home</NavLink>
            <NavLink 
            to="/Services" className='nav-link text-uppercase'
              style={({ isActive }) => ({
              color: isActive ? 'white' : 'white',
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: isActive ? 'underline' : 'none',
            })}
            > Services</NavLink>         
            <NavLink 
            to="/Portfolio" className='nav-link text-uppercase'
              style={({ isActive }) => ({
              color: isActive ? 'white' : 'white',
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: isActive ? 'underline' : 'none',
            })}
            > Portfolio</NavLink>            
            <NavLink 
            to="/Contact" className='nav-link text-uppercase'
              style={({ isActive }) => ({
              color: isActive ? 'white' : 'white',
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: isActive ? 'underline' : 'none',
            })}
            > Contact</NavLink>           
            <NavLink 
            to="/MentionsLegales" className="nav-link text-uppercase"
              style={({ isActive }) => ({
              color: isActive ? 'white' : 'white',
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: isActive ? 'underline' : 'none',
            })}
            > Mentions Légales</NavLink>

          </Nav>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
  );
}

export default PortfolioNavBar;
