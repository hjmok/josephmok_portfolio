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
              </a>npm 
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">
            <h1>Tensorflow CNN Results</h1>
            <p align="left">After 40 epochs, the training accuracy was 92.6%. However, the validation accuracy was much lower at 78.6%, meaning overfitting occured. To improve this, dropout layers, batch normalization, and more convolutional layers should be used. Due to lack of computational power and time (no GPU), these improvements were added and tested on the PyTorch CNN instead. </p>
            <h1>PyTorch CNN Results</h1>
            <p align="left">After 40 epochs, the training accuracy was found to be 77.5%. The validation accuracy was consistent with this at 76.6%, which is also supported by the accuracy plot below. This shows that the addition of dropout layers and batch normalization has helped to reduce overfitting from the Tensorflow results above. <br></br>In addition, the confusion matrix suggests that cats are more likely to be falsely predicted as dogs. An explanation for this may be due to cats having pointy ears similar spitz type dogs such as Huskies and Jindos. As such, the model may mislabel them as dogs (and the same could go for said dogs being mislabelled as cats).</p>
            <br></br>
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
