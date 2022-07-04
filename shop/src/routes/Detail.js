import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from  'styled-components';
import { Nav } from 'react-bootstrap';

// let YellowBtn = styled.button`
//   background: ${props => props.bg};
//   color: ${props => props.bg == 'blue' ? 'white' : 'black'};
//   padding: 10px;
// `

// let NewBtn = styled.button(YellowBtn);

// let New2Btn = styled.button(YellowBtn)`
//   background: red;
// `


function Detail(props) {
  let [alert , setAlert] = useState(true);
  let [count , setCount] = useState(0);
  let [tab, setTab] = useState(0)
  let [fade2, setFade2] = useState('');
  useEffect(()=>{
    setTimeout(()=>{
      setFade2('end')
    }, 500);
    return ()=>{
      setFade2('');
    }
  }, [])

  // 렌더링 후 코드
  useEffect(() => {
    let timer = setTimeout(() => {setAlert(false)}, 2000)
    console.log(1)

    // useEffet실행전 코드
    return () => {
      console.log(2)
      clearTimeout(timer)
    }
  }, [count])

  let {id} = useParams();
  console.log(id);
  return (
    <div className={"container start"+fade2}>
      {
        alert == true ?
        <div className="alert alert-warning">
          2초 후 삭제
        </div> : false
      }
      <button onClick={() => {setCount(count+1)}}>{count}</button>
      {/* <YellowBtn bg="blue">btn</YellowBtn>
      <YellowBtn bg="red">btn</YellowBtn> */}
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent className="start" tab={tab}></TabContent>
    </div> 
  )
}

function TabContent(props) {
  // if (props.tab === 0) {
  //   return <div>내용0</div>
  // }
  // if (props.tab === 1) {
  //   return <div>내용1</div>
  // }
  // if (props.tab === 2) {
  //   return <div>내용2</div>
  // }
  let [fade, setFade] = useState('');
  
  useEffect(()=>{
    setTimeout(()=>{
      setFade('end');
    }, 500)
    return ()=>{
      setFade('')
    }
  }, [props.tab]);
  return <div className={"start "+fade}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]}</div>
}
export default Detail;