import React from "react";
import "./Styles/Articles.css";
import data from "./Data/ArticleData";
const Articles = () => {
  return (
    <>
      <div className="article-container">
        <div className="discreption-container">
          <h3>Read top articles from health experts</h3>
          <p>
            Health articles that keep you informed about good health practices
            and achieve your goals.
          </p>
          <button>see all articles</button>
        </div>
        <div className="poster-container1">
          {data.map((item, i) => {
            return (
              <div key={i} className="list-container">
                <div className="image-container">
                  <img className="image" src={item.img} alt={item.title} />
                </div>
                <div className="desc-container">
                  <p className="title3">{item.title}</p>
                  <h4 className="info-3">{item.info}</h4>
                  <p className="name3">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Articles;
