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

    if (this.props.data) {
      var projects2 = this.props.data.projects2.map(function (projects2) {
        var projectImage = 'images/portfolio/' + projects2.image;
        
        return (
          <div key={projects2.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects2.url} title={projects2.title}>
                <img alt={projects2.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects2.title}</h5>
                    <p>{projects2.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    if (this.props.data) {
      var projects3 = this.props.data.projects3.map(function (projects3) {
        var projectImage = 'images/portfolio/' + projects3.image;
        
        return (
          <div key={projects3.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects3.url} title={projects3.title}>
                <img alt={projects3.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects3.title}</h5>
                    <p>{projects3.category}</p>
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
            <p align="left">Based on the images below, the Logistic Regression and Random Forest models both had similar results at 81% and 82% F1-scores overall. Decision tree performed the worst, especially when predicting the clients that defaulted payments at 38% precision andd 71% F1-score. Similarly, both Random Forest and Logistic Regression had worse precision for predicting defaulting clients as well. However, this may be due to training on an unbalanced dataset. 78% of the labels were for paid clients, whereas 22% were defaulting clients. As such, a more balanced labelled dataset would help improve on the precision for the defaulting classification label. </p>
            <h1>Decision Tree Classification</h1>
            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {projects}
            </div>
          
            <h1>Random Forest Classification</h1>
            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {projects2}
            </div>

            <h1>Logistic Regression</h1>
            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {projects3}
            </div>

          </div>
        </div>
      </section>
    ); 
  }
}

export default Results;
