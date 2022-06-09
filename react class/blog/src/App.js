import './App.css';
import { useState } from 'react';

function App() {
  let post = '우동 맛집';
  let [title, b] = useState('남자 코트 추천')
  return (
    <div className="App">
      <div className="blog">
        <h4>블로그</h4>  
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
