import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

export default function MainNav() {
  const navigate = useNavigate();
  const user = 'UserName';

  function toAdmin() {
    navigate('/admin');
  }
  return (
    <nav>
      <Navbar expand="lg" id="top-nav" className="p-5">
        <Container className="md-col-8">
          <Navbar.Brand href="" className="fs-3">
            @ Consultorio Virtual
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto fs-5 d-flex gap-3">
              <NavLink to="/home" className="me-auto nav-link">
                Inicio
              </NavLink>
              <NavLink to="/faqs" className="nav-link">
                Preguntas Frecuentes
              </NavLink>
              <NavDropdown
                bg="dark"
                title={user ? `Hola ${user}` : 'Iniciar sesión'}
                id="main-nav-dropdown"
                menuVariant="light"
              >
                <Container>
                  <NavDropdown.Item href="#">Usuario</NavDropdown.Item>
                  <NavDropdown.Item href="#">Administrador</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Zona de usuario</NavDropdown.Item>
                  <NavDropdown.Item onClick={toAdmin}>
                    Zona de Admin
                  </NavDropdown.Item>
                </Container>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
