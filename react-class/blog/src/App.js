import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  let logo = 'ReactBlog';
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [good, goodPlus] = useState([0, 10,20]);
  let [hi, hiChange] = useState('hi');
  let [modal2, setModal] = useState(false);

  [1,2,3].map(function(a) {
    console.log(a)
  });

  return (
    <div className="App">
      <div className="blog">
        <h4>{logo}</h4>  
      </div>

      {/* <button onClick={()=>{
        let copy = [...title];
        copy[0] = '여자 코트';
        titleChange(copy);
      }}>남자 코트 추천 말고 여자 코트 추천</button>

      <div className="list">
        <h4>{title[0]} <span onClick={()=>{goodPlus(good+=1);}}>👍</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]} <span onClick={()=>{hi==='hi'?hiChange('bye'):hiChange('hi')}}>hiChange</span> {hi}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        title.map(function(a, i) {
          return (
            <div className="list">
              <h4>{title[i]} <span onClick={()=>{
                let copy = [...good];
                copy[i] = copy[i] + 1;
                goodPlus(copy);
                }}>👍 score: {good[i]}</span></h4> {/* {a}*/}
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      

     <Modal></Modal>
     <Modal2></Modal2>
     <button onClick={()=>{modal2 == true ? setModal(false) : setModal(true)}}>show modalScreen</button>
      {
        modal2 == false ? <Modal2/> : null 
      }
    </div>
  );
}

function Modal2() {
  return (
    <div className="modal2">
     <h4>제목2</h4>
     <p>날짜2</p>
     <p>상세내용2</p>
    </div>
  )
}

export default App;
