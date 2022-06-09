import './App.css';
import { useState } from 'react';

function App() {
  let logo = 'ReactBlog';
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [good, goodPlus] = useState(0);
  let [hi, hiChange] = useState('hi');

  return (
    <div className="App">
      <div className="blog">
        <h4>{logo}</h4>  
      </div>

      <button onClick={()=>{titleChange(['여자 코트 추천', '강남 우동맛집', '파이썬독학'])}}>남자 코트 추천 말고 여자 코트 추천</button>

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
      </div>
    </div>
  );
}

export default App;
