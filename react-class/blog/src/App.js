import './App.css';
import { useState } from 'react';

function App() {
  let logo = 'ReactBlog';
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [good, goodPlus] = useState([0, 0, 0]);
  let [hi, hiChange] = useState('hi');
  let [modal, setModal] = useState(false);
  let [title2, setTitle] = useState(0);

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
              <h4 onClick={()=>{modal == true ? setModal(false) : setModal(true); setTitle(i)}}>{title[i]} <span onClick={()=>{
                let copy = [...good];
                copy[i] = copy[i] + 1;
                goodPlus(copy);
                }}>👍 score: {good[i]}</span></h4> {/* {a}*/}
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      


      {
        modal == false ? <Modal title2={title2} titleChange={titleChange} title={title} color={'skyblue'}/> : null 
      }
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

export default App;
