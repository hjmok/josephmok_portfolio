import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import '../App.css';
import Header from './Project_Header';
import Results from './CV/CNN Alexnet Implementation/Results_AN.js';
import Method from './Method';
import Footer from './Footer';

class AN extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      Data: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getData(){
    $.ajax({
      url:'./CV/anData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({Data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div className="AN">
        <Header data={this.state.Data.main}/>
        <Method data={this.state.Data.method}/>
        <Results data={this.state.Data.results}/>
        <Footer data={this.state.Data.main}/>   
      </div>
    )
  }
}

export default AN;

//        <Navbar />
//        <h1>hello</h1>