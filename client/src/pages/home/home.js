// import { Table } from "../../base";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";
// styles
import styles from "./home.module.css";

const Home = (props) => {
  return (
    <>
      <Container>
        <h2 className={styles.title}>Benvenuto Monica bellucci!</h2>
        <h3 className={styles.subtitle}>Dove eravemo rimasti?</h3>
        <Row className={styles.tables}>
          <Col  lg={6} md={12}>
            <Table   striped bordered hover>
              <thead>
                <tr className="bg-success text-white">
                  <th>Nouve domande nei corsi a cul sei Iscritto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={6} md={12}>
            <Table  striped bordered hover>
              <thead>
                <tr className="bg-success text-white">
                  <th>Nouve domande nei corsi a cul sei Iscritto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className={styles.tables}>
          <Col  lg={6} md={12}>
            <Table   striped bordered hover>
              <thead>
                <tr className="bg-success text-white">
                  <th>Nouve domande nei corsi a cul sei Iscritto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={6} md={12}>
            <Table  striped bordered hover>
              <thead>
                <tr className="bg-success text-white">
                  <th>Nouve domande nei corsi a cul sei Iscritto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
                <tr>
                  <td>cras justo odio</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
