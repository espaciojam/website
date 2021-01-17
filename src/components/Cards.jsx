import React from "react";
import CardItem from "./CardItem";
import NbaEpisodios from "../data/nbaEpisodios.json";
import CineEpisodios from "../data/cineEpisodios.json";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards__container">
      <div className="cards__items">
        <h3 className="section__title">Baloncesto</h3>
        {NbaEpisodios.map((article, key) => {
          return (
            <div key={key}>
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
        <h3 className="section__title">Cine</h3>
        {CineEpisodios.map((article, key) => {
          return (
            <div key={key}>
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
    </div>
  );
}

export default Cards;
