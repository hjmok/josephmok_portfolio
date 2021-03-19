import React, { Component } from 'react';

class Method extends Component {
  
  render() {

    if(this.props.data){
        var overview = this.props.data.overview.map(function(overview){
        return <div key={overview.title}><h3>{overview.title}</h3>
        <p>{overview.description1a}<br></br>{overview.description1b}<br></br>{overview.description1c}<a href={overview.description1d} target="_blank">{overview.description1d}</a></p></div>  
      })

    }

    return (
      <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Method</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {overview}
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default Method;

