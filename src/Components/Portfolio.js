import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects1 = this.props.data.projects1.map(function (projects1) {
        var projectImage = 'images/portfolio/' + projects1.image;
        
        return (
          <div key={projects1.title} className="columns portfolio-item"><div className="item-wrap">
              <a href={projects1.url} title={projects1.title}>
                <img alt={projects1.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects1.title}</h5>
                    <p>{projects1.category}</p>
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

    if (this.props.data) {
      var projects3 = this.props.data.projects3.map(function (projects3) {
        var projectImage = 'images/portfolio/' + projects3.image;
        
        return (
          <div key={projects3.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects3.url} title={projects3.title}>
                <img alt={projects3.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects3.title}</h5>
                    <p>{projects3.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    if (this.props.data) {
      var projects4 = this.props.data.projects4.map(function (projects4) {
        var projectImage = 'images/portfolio/' + projects4.image;
        
        return (
          <div key={projects4.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects4.url} title={projects4.title}>
                <img alt={projects4.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects4.title}</h5>
                    <p>{projects4.category}</p>
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

            <h1>Computer Vision Portfolio</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
              {projects1}
            </div>
            <h1>Natural Language Processing Portfolio</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects2}
            </div>
            <h1>General Deep Learning Portfolio</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects3}
            </div>
            <h1>General Machine Learning Portfolio</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects4}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
