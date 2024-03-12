import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Myfooter() {
  return (
    <Container fluid>
      <Row className="bg-dark text-white justify-content-center" >
        <Col  >
        <p className="my-3 text-center"> &copy; Copyright 2024  IVA 73456821\4537767575   </p>
        
        </Col>
      </Row>
    </Container>
  );
}

export default Myfooter;