import './App.css';
import {Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Nav</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">사진</Nav.Link>
            <Nav.Link href="#pricing">ㅁㄹ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage: 'url('+bg+')'}}></div>

      <div>
        <Row>
          <Col xs={{ order: 'last' }}>
            <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%"/>
            <h4>상품명</h4>
            <p></p>
          </Col>
          <Col xs>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>상품명</h4>
            <p></p>
          </Col>
          <Col xs={{ order: 'first' }}>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>상품명</h4>
            <p></p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
