import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SearchCard from '../components/SearchCard';

import { NavLink } from 'react-router-dom';

export default function SearchResults() {
  return (
    <>
      <section id="filterSearchResutls" class="">
        <div class="container" id="resultsPage">
          <h1 class="p-2 m-4">Especialidad, Ciudad</h1>
        </div>
      </section>
      <section id="resultsSection" class="">
        <div class="container-fluid">
          <div class="container text-center">
            <div class="row align-items-start">
              <div class="p-0 m-2 col border">
                <div class="container px-4 text-center">
                  <SearchCard />
                  <SearchCard />
                  <SearchCard />
                  <SearchCard />
                </div>
              </div>
              <div class="col">
                <img
                  src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2013/10/google-maps-new-interface.jpg?fit=950%2C534&quality=50&strip=all&ssl=1"
                  class="img-fluid"
                  alt="GoogleMaps API"
                />
                <NavLink to="/checkoutForm" class="nav-link">
                  <button type="button" class="btn btn-lg btn-light btn-sm">
                    Pagar
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
