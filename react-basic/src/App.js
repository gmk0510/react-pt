import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {title: 'WEB', sub: 'World wide Web',}
    }
  }

  render() {
    return (
      <div className='App'>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC/>
        <Footer txt="this footer"/>
      </div>
    );
  }
}

class Subject extends Component {
  render() {
    return (
      <header >
        <h1>{this.props.title}</h1>
        <p>{this.props.sub}</p>
      </header>
    );
  }
}


export default App;
