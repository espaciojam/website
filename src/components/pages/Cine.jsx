import React from "react";
import CardItem from "../CardItem";
import ArticleCardItem from "../ArticleCardItem";
import CineArticles from "../../data/cineArticles.json";
import CineEpisodios from "../../data/cineEpisodios.json";
import "../Cards.css";
import "../../App.css";

function Cine() {
  return (
    <div className="">
      <h1 className="cine">Cine</h1>
      <div className="cards__container">
        <div className="cards__items">
          {CineEpisodios.map((article, key) => {
            return (
              <div key={article.number}>
                <CardItem
                  type={article.type}
                  id={article.id}
                  date={article.publishDate}
                  title={article.title}
                  description={article.description}
                  path={article.slug}
                />
              </div>
            );
          })}
        </div>
        <div className="cards__items">
          {CineArticles.map((article, key) => {
            return (
              <div key={key}>
                <ArticleCardItem
                  type={article.type}
                  id={article.id}
                  author={article.author}
                  date={article.publishDate}
                  title={article.title}
                  description={article.description}
                  path={article.slug}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cine;
