import './App.css';
import { useState } from 'react';
import {Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data.js';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">detail</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <div>
            <div className="main-bg" style={{ backgroundImage: 'url('+bg+')'}}></div>
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
        } />
        <Route path="/detail" element={<div>detail page.</div>} />
      </Routes>
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
