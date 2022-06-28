import './App.css';
import { useState } from 'react';
import {Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail';

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('./')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('./detail')}}>detail</Nav.Link>
            <Nav.Link href="/">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Link to="/">Main page</Link> <br />
      <Link to="/detail">Detail page</Link> <br />
      <Link to="/detail/0">go detail 1</Link>
      <Link to="/detail/1">go detail 2</Link>
      <Link to="/detail/2">go detail 3</Link>

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

        
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="*" element={<div>없는 페이지입니다.</div>} />

        <Route path="/about" element={<About/>} >
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>

        <Route path="/event" element={<Evnt />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
      
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

function About() {
  return (
    <div>
      <h3>회사 정보.</h3>
      <Outlet></Outlet>
    </div>
  )
}

function Evnt() {
  return (
    <div>
      <h5>오늘의 이벤트</h5>
      <Outlet />
    </div>
  )
}

export default App;
