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
            <p align="left">Both models were trained on 450 epochs. As a result, the average root means squared error loss became 3.8764 for the Fare Amount Regression model. This means for every estimated fare, the model will be off by $3.88 on average. Moreover, the Fare Class Classification model resulted in a final the cross entropy loss of 0.272. <br></br> To improve both models, more optimization with the layer size and dropout rate can be tuned. In addition, the MSE LOSS plot below shows the loss was still declining slowly. As such, the Fare Amount Regression model could've kept training for a few more epochs to reduce the loss.</p>
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
