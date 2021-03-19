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
          
            <h1>Results</h1>
            <p align="center">Below are some personal videos of mine that I inputted into the SSD model!
            <p> </p>
            <ReactPlayer url='https://youtu.be/MYLPGvMp0bs' width = "630px" height = "360px"/>
            <br></br>
            <ReactPlayer url='https://youtu.be/_8VoK2-fehQ' width = "630px" height = "360px"/>
            <br></br>
            <ReactPlayer url='https://www.youtube.com/watch?v=e8vrAFZ4JP0' width = "630px" height = "360px"/>
            <br></br>
            <ReactPlayer url='https://youtu.be/rBO0Wv1EtwM' align="center"/></p>
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
