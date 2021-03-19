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
          
            <h1>AlexNet Results</h1>
            <p align="left">After 40 epochs, the training accuracy was found to be 91.6% and test accuracy was even better at 95.5%. This is already performing far better my CNN model which had a training accuracy of 77.5% and test accuracy was 76.6%. To improve my CNN model, more Convolutional layers can be added similar to AlexNet, as well as optimizing specific attributes such as kernel size and strides.
            <br></br> Similar to my CNN's results, the confusion matrix below suggests that cats are still misclassified as dogs more often. An explanation for this may be due to cats having pointy ears similar spitz type dogs such as Huskies and Jindos. As such, the model may mislabel them as dogs (and the same could go for said dogs being mislabelled as cats).</p>
            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    ); 
  }
}

export default Results;
