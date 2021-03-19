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
            <p align="left">All models were trained for 150 epochs. As seen in the images below, the predicted values are within the same scale as the labels when compared to the past 3 months (66 weekdays) for Google and past year (261 weekdays) for Google and AMD. More importantly, the general trend is followed for 3/4 of the plots, showing the model is capable of understanding when prices drops or increases are expected to occur. <br>
            </br>However, it should be noted that for Google stocks, the model is consistently underestimating the price. This may be due to overwhelming market optimism for Google over the past decade that the model does not have the data to factor in. <br>
            </br>For the AMD year long prediction, the model was very closely following the actual prices until the last 50 days. This may be due to AMD announcing record profits or a new, promising product that the model does not have information to. As such, it did not overextend the rise in stock prices like it did in reality.
            This is consistent with the AMD 3 month prediction, which performed the worst out of all 4 plots. 
            <br></br>To improve the model, the number of LSTM layers, neurons, batch size, dropout rate, and optimizer could be experimented with.</p>
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
