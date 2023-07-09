import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainNav() {
  const user = 'UserName';
  return (
    <nav>
      <Navbar expand="lg" id="top-nav" className="p-5 bg-body-primary">
        <Container className="md-col-8">
          <Navbar.Brand href="" className="fs-3">
            @ Consultorio Virtual
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto fs-5 d-flex gap-3">
              <Nav.Link href="home" active className="me-auto">
                Inicio
              </Nav.Link>
              <Nav.Link href="">Preguntas Frecuentes</Nav.Link>
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
                </Container>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
