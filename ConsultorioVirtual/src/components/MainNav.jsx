import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import UserContext from '../containers/UserContext';
import { useNavigate } from 'react-router-dom';

export default function MainNav() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function LogOut() {
    setTimeout(() => {
      setUser(() => null);
      navigate('/home');
    }, 100);
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
                title={user ? `Hola ${user.email}` : 'Iniciar sesión'}
                id="main-nav-dropdown"
              >
                <NavLink to="/login" className="dropdown-item" disabled={user}>
                  Usuario
                </NavLink>
                <NavLink to="/login" className="dropdown-item" disabled={user}>
                  Administrador
                </NavLink>
                <NavDropdown.Divider />
                <NavLink to="/user" className="dropdown-item" disabled={!user}>
                  Zona de usuario
                </NavLink>
                <NavLink to="/admin" className="dropdown-item" disabled={!user}>
                  Zona de Admin
                </NavLink>
                <NavLink onClick={LogOut} className="dropdown-item">
                  Salir
                </NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
