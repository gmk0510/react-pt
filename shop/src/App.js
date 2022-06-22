import './App.css';
import { useState } from 'react';
import {Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data.js';

function App() {
  let [shoes] = useState(data);

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
          {
            shoes.map((a, i)=>{
              return (
                <Card shoes={shoes[i]} i={i}/>
              )
            })
          }
        </Row>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <Col xs>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;
