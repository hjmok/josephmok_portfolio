import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Results extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title} target="_blank">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

  

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">
          
            <h1>Results</h1>
            <p align="left">After 250 epochs, the training accuracy achieved almost 95% accuracy, whereas the validation accuracy was around 90%. This suggests the model overfit slightly, and parameters can be tweaked to reduce this, such as increasing the dropout rate. Please see below the accuracy plot, as well as sample example questions asked to the model.</p>
            <div id="portfolio-wrapper" className="bgrid s-bgrid cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    ); 
  }
}

export default Results;
