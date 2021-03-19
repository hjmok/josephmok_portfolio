import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import '../App.css';
import Header from './Project_Header';
import Results from './ML/Disease Survival K Means Clustering/Results_DS.js';
import Method from './ML/Disease Survival K Means Clustering/Method_DS.js';
import Footer from './Footer';

class DS extends Component {

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
      url:'./ML/dsData.json',
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
      <div className="DS">
        <Header data={this.state.Data.main}/>
        <Method data={this.state.Data.method}/>
        <Results data={this.state.Data.results}/>
        <Footer data={this.state.Data.main}/>   
      </div>
    )
  }
}

export default DS;

//        <Navbar />
//        <h1>hello</h1>