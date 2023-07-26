import { Container } from 'react-bootstrap';

export default function CheckoutForm() {
  return (
    <>
      <section id="personalDataConfirmation" className="p-5">
        <Container>
          <h1>Reservar Cita</h1>
        </Container>
        <Container className="p-3">
          <h2>Confirma tus datos personales</h2>
          <form>
            <fieldset disabled>
              <div className="mb-3 p-2">
                <label for="disabledTextInput" className="form-label p-2 fs-4">
                  Informacion personal*
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Nombres y apellidos"
                />
              </div>
              <div className="mb-3 p-2">
                <label for="disabledTextInput" className="form-label p-2 fs-4">
                  Informacion de contacto*
                </label>
                <input
                  type="text"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="Número de celular"
                />
              </div>
            </fieldset>
            <button type="submit" className="btn btn-lg btn-primary">
              Confirmar y agendar cita
            </button>
          </form>
        </Container>
        <div></div>
      </section>
    </>
  );
}
