
import Form from 'react-bootstrap/Form'
import { Button ,Container,Row,Col} from 'react-bootstrap';
import './form.css'
function Forms () {
    return (
        <Container fluid>
        <Form>


        <Row>
    <Col md={{ span: 6, offset: 3 }}>
    <Form.Group controlId="formBasicname">
    <Form.Label>Full name</Form.Label>
    <Form.Control type="name" placeholder="Your name" />
  </Form.Group>
    </Col>
  </Row>
     <Row>
    <Col>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      We'll never share your email with anyone else.
      </Form.Text>
     </Form.Group>
  </Col>
  <Col>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Number phone</Form.Label>
    <Form.Control type="number" placeholder="+216" />
    
  </Form.Group>
  </Col>

  </Row>

<Row>
    <Col>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Vos questions</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
    </Col>
</Row>
  <Row>
    <Col><Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group></Col>
  </Row>
<Row>
    <Col>
  <  Button variant="success" type="submit">
    Submit
  </Button>
    </Col>

</Row>

  </Form>
</Container>



    );
}
export default Forms;

