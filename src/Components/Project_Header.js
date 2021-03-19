import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import ParticlesBg from 'particles-bg'


class Header extends Component {
  render() {

    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
    }
    //color="#ff0000"
    return (
      <header id="home">
      <ParticlesBg color="0BF7F3" num={100} type="cobweb" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#Overview" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li>
               <a href="/">
                  <Link to="/#/portfolio" target="_blank">
                     Back
                  </Link>
               </a>
            </li>
            <li className="current"><a className="smoothscroll" href="#home">Overview</a></li>
	         <li><a className="smoothscroll" href="#resume">Method</a></li>
            <li><a className="smoothscroll" href="#portfolio">Results</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={github} target="_blank" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
