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
            <p align="left">After 500 epochs, the training and test losses achieved were 0.8077 and 0.8958 respectively. This means that the Stacked AutoEncoder model was able to accurately predict the rating a user would give to a film within ±1 star.<br>
            </br>To further improve the model, the number of nodes in the hidden layers as well as the number of hidden layers can be experimented with. In addition, dropout layers may be useful to prevent overfitting of the model.</p>
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
