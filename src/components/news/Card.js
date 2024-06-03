import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <>
      <div className="news_card">
        <div className="content_class">
          <a target="_blank" href={props.targetlink}>
            <h2 className="news_heading">{props.heading}</h2>
          </a>

          <div className="content">{props.desc}</div>
        </div>
        <div className="img_class">
          <img className="img" src={props.url==null?"https://c8.alamy.com/comp/2H5RADC/globe-world-news-flat-icon-vector-illustration-news-symbol-logo-illustration-2H5RADC.jpg" :props.url}alt="" />
        </div>
      </div>
    </>
  );
}
export default Card;
