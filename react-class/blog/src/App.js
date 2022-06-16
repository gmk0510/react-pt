import './App.css';
import React, { useState } from 'react';

function App() {
  let logo = 'ReactBlog';
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [good, goodPlus] = useState([0, 0, 0]);
  let [hi, hiChange] = useState('hi');
  let [modal, setModal] = useState(false);
  let [title2, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  [1,2,3].map(function(a) {
    console.log(a)
  });

  return (
    <div className="App">
      <div className="blog">
        <h4>{logo}</h4>  
      </div>

      {
        title.map(function(a, i) {
          return (
            <div className="list">
              <h4 onClick={()=>{modal == true ? setModal(false) : setModal(true); setTitle(i)}}>{title[i]} <span onClick={(e)=>{
                let copy = [...good];
                copy[i] = copy[i] + 1;
                goodPlus(copy);
                e.stopPropagation();
                }}>👍 score: {good[i]}</span></h4> {/* {a}*/}
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i, 1);
                titleChange(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value); 
      }}></input>
      <button onClick={()=>{
        let copy = [...title];
        copy.unshift(입력값);
        titleChange(copy);
      }}>글 추가</button>      

      {
        modal == false ? <Modal title2={title2} titleChange={titleChange} title={title} color={'skyblue'}/> : null 
      }
      <Profile />
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal2" style={{background: props.color}}>
     <h4>{props.title[props.title2]}</h4>
     <p>날짜2</p>
     <p>상세내용2</p>
     <button>글수정</button>
    </div>
  )
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {name: 'kmk', age: 20}
  }

  changeName() {
    this.setState({name: 'kkk'})
  }

  render() {
    return(
      <div>
        <h3>프로필입니다.</h3>
        <p>my name is {this.state.name}</p>
        <button onClick={()=>{this.setState.bind(this)}}btn ></button>
      </div>
    )
  }
}

export default App;
