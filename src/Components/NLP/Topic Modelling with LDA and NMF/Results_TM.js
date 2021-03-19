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

    if (this.props.data) {
      var projects2 = this.props.data.projects2.map(function (projects2) {
        var projectImage = 'images/portfolio/' + projects2.image;
        
        return (
          <div key={projects2.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects2.url} title={projects2.title}>
                <img alt={projects2.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects2.title}</h5>
                    <p>{projects2.category}</p>
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
            <h1>Latent Dirichlet Allocation Results</h1>
            <p align="left">For both the Quora and NPR dataset, LDA was able to cluster 12 and 6 topics respectively. The user interpretation of the resulting clusters appear to be somewhat successful based off the images below. <br></br> To improve the model, stricter max and min document frequencies can be used. Also, the user may want to try different number of topics, as 12 may have been too many for Quora due to the larger overlap between topics. </p>
            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {projects2}
            </div>
          
            <h1>Non-Negative Matrix Factorization Results</h1>
            <p align="left">Similar to LDA, the resulting clusters from NMF gave the users some overlapping interpretations. For example, NPR's Article 1 fell under the topic "GOP" in both LDA and NFM, but Article 4 was different between the two. <br></br> To further improve the model, NMF experiment with the same parameters listed in LDA above.</p>
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
