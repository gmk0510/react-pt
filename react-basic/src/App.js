import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC'
import Footer from './components/Footer'
import Content from './components/Content'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
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
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className='App'>
        {/* <Subject title={this.state.subject.title} sub={this.state.subje ct.sub}></Subject> */}
        <header>
          <h1><a href='/' onClick={function(e) {
            console.log(e);
            e.preventDefault();
            // this.state.mode='welcome';
            this.setState({
              mode: 'welcome'
            })
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents} />
        <Footer txt="this footer"/>
        <Content title={_title} desc={_desc}></Content>
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
