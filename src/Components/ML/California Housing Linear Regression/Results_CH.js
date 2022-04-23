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
            </br>Both the PySpark and Scikit Learn Linear Regression modules resulted in similar Root Mean Squared Errors at $71944 and $69079 respectively. This is within one standard deviation of the median housing price, which is $115396.</p>
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
