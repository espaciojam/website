import React from "react";
import { Link } from "react-router-dom";

function ArticleCardItem(props) {
  return (
    <div>
      <li className="cards__item">
        <Link className="cards__item__link" to={`/${props.path}`}>
          <div className="articlecards__item__overline">
            
            <img
              src={props.author.image}
              alt="Antonio"
              className="articlecards__item__image"
            />
            
            <div className="cards__item__info">
              <p className="cards__item__number">{props.author.name}</p>
              <p className="cards__item__date">{props.date}</p>
            </div>
            
          </div>
          <div className="cards__item__info">
            <h3 className="cards__item__title">{props.title}</h3>
          </div>
          <div className="cards__item__info">
            <p className="cards__item__description">{props.description}</p>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default ArticleCardItem;
