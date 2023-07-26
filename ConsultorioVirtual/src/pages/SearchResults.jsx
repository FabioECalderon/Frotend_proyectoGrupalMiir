import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SearchCard from '../components/SearchCard';

import { NavLink } from 'react-router-dom';

export default function SearchResults() {
  return (
    <>
      <section id="filterSearchResutls" className="">
        <Container id="resultsPage">
          <h1 className="p-2 m-4">Especialidad, Ciudad</h1>
        </Container>
      </section>
      <section id="resultsSection" className="">
        <Container fluid>
          <Container className="text-center">
            <Row className="row align-items-start">
              <Col lg={9} className="p-0 m-2 col border">
                <Container className=" px-4 text-center">
                  <SearchCard />
                  <SearchCard />
                  <SearchCard />
                  <SearchCard />
                </Container>
              </Col>
              <Col>
                <img
                  src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2013/10/google-maps-new-interface.jpg?fit=950%2C534&quality=50&strip=all&ssl=1"
                  className="img-fluid"
                  alt="GoogleMaps API"
                />
                <NavLink to="/checkoutForm" className="nav-link">
                  <button type="button" className="btn btn-lg btn-light btn-sm">
                    Pagar
                  </button>
                </NavLink>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
}
