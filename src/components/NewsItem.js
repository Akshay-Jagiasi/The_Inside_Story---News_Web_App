import React from "react";
const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date, source}=props;
    return (
      <div className='my-3'>
        <div className="card">
       <div style={{
        display:"flex",
        justifyContent:"flex-end",
        position: "absolute",
        right: "0"
       }}>
       <span class="badge rounded-pill bg-danger">{source}</span>
       </div>
            <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/01/08/1600x900/pexels-cottonbro-studio-5077047_1673148674825_1673148697726_1673148697726.jpg":imageUrl} className="Card image cap" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}...</p>
                <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem