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
    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">
          
            <h1>Ham or Spam Dataset Results</h1>
            <p align="left">The final F1-score of this model was 98%. The resulting F1-score is very high due to the highly predictable sentence structure of spam messages. Often, they will start with positive words such as "Congratulations" and "winner" and end with prompts to respond. As long as the SMS text varies outside of this sentence structure, it can very easily be classified as not spam. Please see below the classification report, confusion matrix, and the predicted classes for new data.</p>
            <div id="portfolio-wrapper" className="bgrid s-bgrid cf">
              {projects}
            </div>
            <h1>Positive or Negative Amazon Review Results</h1>
            <p align="left">The final F1-score of this model was 86%. This scored a lot lower than the Ham or Spam results due to the added complexity of reviews. <br>
            </br> Often, the reviews can vary in length and utilize far more vocabulary. This was evidently shown by the resulting shape of X_train after being TFIDF vectorized. In Ham or Spam, 7462 unique words were found over 4179 messages, whereas in the Amazon reviews, 28262 unique words were found over 8000 reviews. The additional vocabulary can often be used for both positive and negative sentiments, thus making the model take into consideration the words prior to understand the context.<br>
            </br>In addition, reviews may often have sentences praising parts of the product, but giving an overall negative final sentiment. This could confuse the model, and an example can be seen in the both the Amazon and Movie Review results below.  </p>
            <div id="portfolio-wrapper" className="bgrid s-bgrid cf">
              {projects2}
            </div>
            <h1>Positive or Negative Movie Review Results</h1>
            <p align="left">Similar to the Amazon reviews, the final F1-score for this model was 85%. Looking over this dataset, the reviews for movies were often much longer than reviews for products on Amazon. Due to this, there is far more complexity as critics will often list multiple good and bad things about the film before the final verdict. For example, in the image below, Line 20 had a review praising the actors but criticizing the film was boring. Messages such as these are prone to incorrect classification by the model. </p>
            <div id="portfolio-wrapper" className="bgrid s-bgrid cf">
              {projects3}
            </div>
          </div>
        </div>
      </section>
    ); 
  }
}

export default Results;
