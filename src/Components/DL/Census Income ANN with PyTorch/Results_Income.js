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

  

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">
            <h1>Results</h1>
            <p align="left">The model was trained for 500 epochs. The model performed well on the test set, being correct 85.75% of the time. However, as seen in the Loss plot below, the loss was still slowly reducing. As such, training on a few dozen more epochs could've achieved a marginally better accuracy.<br>
            </br>Moreover, the dataset was unbalanced, containing 72% of class 0 (below $50k) and 28% class 1 (above $50k). As such, a training on a more even dataset could provide more insight to the latter label  </p>
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
