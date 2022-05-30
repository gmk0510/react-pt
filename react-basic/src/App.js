import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      welcome: {title: 'Welcome', desc: 'hello, react'},
      subject: {title: 'WEB', sub: 'World wide Web',},
      contents: [
        {id: 1, title:'HTML', desc:'HTML is HyperText ...'},
        {id: 2, title:'CSS', desc:'css ...'},
        {id: 3, title:'JS', desc:'js ...'},
      ]
    }
  }

  render() {
    return (
      <div className='App'>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents} />
        <Footer txt="this footer"/>
      </div>
    );
  }
}


class Subject extends Component {
  render() {
    return (
      <header >
        <h1><a href='/'>{this.props.title}</a></h1>
        <p>{this.props.sub}</p>
      </header>
    );
  }
}


export default App;
