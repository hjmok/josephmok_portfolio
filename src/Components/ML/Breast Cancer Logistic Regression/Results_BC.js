import React, { Component } from 'react';

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

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">
            <h1>Results</h1>
            <p align="left">Based on the Classification Report below, the Logistic Regression Model achieved an overall accuracy of 98%, with a high precision and recall. Similarly, the K-Nearest Neighbour Model achieved an accuracy of 97% with comparable precision and recall as well. However, the K-Nearest Neighbour model did perform dangerously worse by incorrectly misclassifying 5 malignant patients as benign. This is a very bad false negative, as the individuals would forego treatment believing they are fine. Overall though, both model performed similarly well on the test set. </p>
            <h1>Logistic Regression</h1>
            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {projects}
            </div>
            <h1>K-Nearest Neighbour</h1>
            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {projects2}
            </div>
          </div>
        </div>
      </section>
    ); 
  }
}

export default Results;
