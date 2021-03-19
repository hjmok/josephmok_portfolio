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
            <p align="left">The model was set to train for 300 epochs, but stopped at epoch 167 due to Early Stopping. As seen in the Classification Report, the model has an overall accuracy of 87%. However, the model has a much higher recall for Staying compared to Exiting. <br>
            </br>The Confusion Matrix also supports this, as it shows 268 exiting customers were misclassified as staying. This may be due to how uneven the dataset labels are (7963 stay, 2037 exit). As such, to improve the model, a more even dataset can be used so that the model can train more on the properties of customers that exited.  </p>
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
