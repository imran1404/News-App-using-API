import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {

        const {title, description, imageUrl, newsUrl, date, author, source} = this.props;

        return (
            <div>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info text-dark" style={{zIndex: 1, left: "90%" }}>{source}</span>
  <img src={imageUrl?imageUrl:"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211213-mayfield-candle-factory-1-cs-1131a-62f9f3.jpg"} className="card-img-top" alt="Api"/>
  <div className="card-body">
    <h5 className="card-title">{(title.length >= 40) ? title + "...":title}</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm
     btn-info">Read More</a>
     <p className="card-text my-2"><small className="text-muted"><b>By</b> {author?author:"unknown"} <b>On</b> {new Date(date).toDateString()}</small></p>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItem;
