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
            <p align="left">As seen in the plot below, the legend goes from black to white for the lowest to highest Mean Interneuron Distances. As such, white nodes are the outliers because they do not belong to any cluster since their distance are farthest from any winning node. The outlier white nodes appear to be in coordinate (3,1) and (10,10). <br>
            </br>In addition, the red circles indicate that the customer got denied, whereas the green squares means they got approved. There are no customers in coordinate (10,10), so all the potential frauds lie in (3,1). As seen on the right image, 23 potential frauds are within outlier. More importantly, 15 out of the 23 customers got approved. <br>
            </br>To further validate this model, the SOM can be rerun several times then have the customer IDs compared to see if any consistently reappearing. Furthermore, the customer IDs can thus be used to investigate the specifics of this customer and how they got approved.</p>
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
