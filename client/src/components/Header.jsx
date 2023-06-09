import { Navbar,Nav, Container, NavbarBrand } from "react-bootstrap";
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa';
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnselect>
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand>Mern Auth</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="ms-auto">
                            <LinkContainer to='/login'>
                            <Nav.Link>
                                <FaSignInAlt/>Sign in 
                            </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/register'>
                            <Nav.Link>
                                <FaSignOutAlt/> Sign up
                            </Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;