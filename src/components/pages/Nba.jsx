import React from "react";
import CardItem from "../CardItem";
import ArticleCardItem from "../ArticleCardItem";
import NbaArticles from "../../data/nbaArticles.json";
import NbaEpisodios from "../../data/nbaEpisodios.json";
import "../Cards.css";
import "../../App.css";

function Nba() {
  return (
    <div className="">
      <h1 className="nba">Baloncesto</h1>
      <div className="cards__container">
        <div className="cards__items">
          {NbaEpisodios.map((article, key) => {
            return (
              <div key={key}>
                <CardItem
                  topic={article.topic}
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
          {NbaArticles.map((article, key) => {
            return (
              <div key={key}>
                <ArticleCardItem
                  topic={article.topic}
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

export default Nba;
