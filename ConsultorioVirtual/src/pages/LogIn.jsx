import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Formik, ErrorMessage } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import UserContext from '../containers/UserContext';
import { useNavigate } from 'react-router-dom';

const signInSchema = z.object({
  email: z.string().email('El email no es válido'),
  password: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(16, 'La contraseña debe tener menos de 16 caracteres'),
});

export default function LogIn() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <>
      <Row className="Container">
        <Col />
        <Col md={6}>
          <h1 className="fs-4 my-5 mx-3">Ingresa a tu cuenta</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setUser({ email: values.email });
                setSubmitting(false);
                navigate('/home');
              }, 100);
            }}
            validationSchema={toFormikValidationSchema(signInSchema)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form className="m-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Ingresa tu email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={
                      touched.email && errors.email ? 'is-invalid' : ''
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Ingresa tu contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={
                      touched.password && errors.password ? 'is-invalid' : ''
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="text-white px-4 mb-5"
                  disabled={isSubmitting}
                >
                  Iniciar sesión
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
        <Col />
      </Row>
    </>
  );
}
