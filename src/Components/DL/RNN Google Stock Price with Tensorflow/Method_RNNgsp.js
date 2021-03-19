import React, { Component } from 'react';

class Method extends Component {
  
  render() {

    if(this.props.data){
        var overview = this.props.data.overview.map(function(overview){
          var overviewImage = 'images/portfolio/' + overview.image;
          return <div key={overview.title}><h2>{overview.title}</h2>
          <h5>{overview.title2}</h5><p>{overview.description1a}<br></br>{overview.description1b}<br></br>{overview.description1c}<a href={overview.description1d} target="_blank">{overview.description1d}</a><br></br><a href={overview.description1e} target="_blank">{overview.description1e}</a></p>
          <div key={overview.imagetitle} className="columns portfolio-item">
            <div>
                <img alt={overview.imagetitle} src={overviewImage} />
                  <div className="portfolio-item-meta">
                    <h5>{overview.imagetitle}</h5>
                  </div>
            </div>
          </div>
          </div> 
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

