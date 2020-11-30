
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbarsection from './Navbar';

import Slides from './Slides';
import Videos from './Videos';
import Forms from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
        
  <Row><Col><Navbarsection/></Col></Row>
  <Row><Col><Videos/></Col></Row>
  <Row ><Col ><p >Jetez un coup d'oeil sur notre plateform au bout d'un clic  ci-dessous.</p></Col></Row>
  <Row><Col>
    <a
      className="App-link"
      href="https://gomycode.com/TN-FR/platform"
      target="_blank"
      rel="noopener noreferrer"
    >
   Un apperçu de notre plateforme
    </a>
    </Col></Row>
 
  <Row><Col><Slides/></Col></Row>
 <Row><Col><p >N'hesitez pas à remplir le formulaire ci-dessous nous allons vous contacter le plutot possible</p></Col></Row>
  <Row><Col><Forms/></Col></Row>

  </Container>
  </header>
  </div>
  );
}

export default App;
