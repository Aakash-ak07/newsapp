import React from "react";

const NewsItems = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
          <span className="badge pill bg-primary"> {source} </span>
        </div>
        <img src={!imgUrl ?"https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx" : imgUrl} 
                  className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title} <h5><span className="badge bg-secondary">New</span></h5></h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author } on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferral" herf={newsUrl} target="_blank" className="btn btn-sm btn-dark"> Read more </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
