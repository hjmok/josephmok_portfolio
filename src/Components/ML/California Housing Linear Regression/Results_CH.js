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
            <p align="left">Based on the scatter plot below, the relationship between the predicted values and the label values are fairly linear for the most part. In addition, the histogram of the residuals (y_test minus predictions) look similar to a normal distribution, indicating that linear regression was a decent choice for this model. <br>
            </br>Lastly, the Mean Absolute Error and Root Mean Squared Error show that the prediction results were off by $50104 and $69079 respectively when predicting the housing price. This is a decent error when considering the housing prices can scale up to $500001.</p>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              {projects}
            </div>

          </div>
        </div>
      </section>
    ); 
  }
}

export default Results;
