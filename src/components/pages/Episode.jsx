import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "../../App.css";
import "./Article.css";

function Article({ match }) {
  const {
    params: { id },
  } = match;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://swapi.dev/api/people/${id}`);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      {!isLoading && (
        <>
          <div className="article__container">
            <img
              src="images/img-1.jpg"
              alt="Antonio"
              className="article__image"
            />
            <div className="article__text">
              <div className="article__header">
                <div className="articlecards__item__overline">
                  <img
                    src="images/Antonio.png"
                    alt="Antonio"
                    className="articlecards__item__image"
                  />
                  <div className="cards__item__info">
                    <p className="cards__item__number">{data.eye_color}</p>
                    <p className="cards__item__date">{data.height}</p>
                  </div>
                </div>
                <div className="cards__item__info">
                  <h1 className="cards__item__title">{data.name}</h1>
                </div>
              </div>
              <iframe width="50%" height="200" frameborder="0" allowfullscreen="" scrolling="no" src="https://www.ivoox.com/en/player_ej_64012361_2_1.html?data=l5mdk5eXepKhhpywj5WVaZS1kpeSlaaZdo6ZmKiak5KJe6ShkpKSmaiRdI6ZmKiap9jUpcTd0JC3w9KPaZOnkp2YpKawk6-3prjBsZCRcYy3sLu2ppDJsozgwpC7pKaJdqSfs9Tczc7Jt4ampJKSmaiRidTkwsjW0ZCupc6hhpywj5k.&"></iframe>
            </div>
          </div>
          {/* <h1>Name: {data.name}</h1>
            <h2>Height: {data.height}</h2>
            <h2>Mass: {data.mass}</h2>
            <h2>Hair Color: {data.hair_color}</h2>
            <h2>Skin Color: {data.skin_color}</h2>
            <h2>Eye Color: {data.eye_color}</h2>
            <h2>Birth Year: {data.birth_year}</h2>
            <h2>Gender: {data.gender}</h2> */}

          {/* <Link to="/">Back to homepage</Link> */}
        </>
      )}
    </>
  );
}

export default Article;
