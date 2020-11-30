
import {Button,Navbar, Nav, NavDropdown,Form,FormControl } from 'react-bootstrap';

function Navbarsection() {
    return(


    



<Navbar bg="light" expand ="lg">
  <Navbar.Brand href="#home">
        <img
            src="data:image/png;base64,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"
            width="135"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">contact</Nav.Link>

      <Nav.Link href="#link">Plateform</Nav.Link>
      <Nav.Link href="#link">Pour les entreprises</Nav.Link>

      <NavDropdown title="Nos programmes" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">web </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">kids </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Data</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Game</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Design</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Systeme</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Part time programs</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
);
}

export default Navbarsection;
