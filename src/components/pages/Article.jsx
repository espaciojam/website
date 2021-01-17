import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "../../App.css";


function Article ({ match }) {
    const {
      params: { path },
    } = match;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
  
    useEffect(() => {
      fetch(`https://swapi.dev/api/people/${path}`, {})
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          setIsLoading(false);
          console.log(`https://swapi.dev/api/people/${path}`);
        })
        .catch((error) => console.log(error));
    }, [path]);
  
    return (
      <>
        {!isLoading && (
          <>
            <h1>Name: {data.name}</h1>
            <h2>Height: {data.height}</h2>
            <h2>Mass: {data.mass}</h2>
            <h2>Hair Color: {data.hair_color}</h2>
            <h2>Skin Color: {data.skin_color}</h2>
            <h2>Eye Color: {data.eye_color}</h2>
            <h2>Birth Year: {data.birth_year}</h2>
            <h2>Gender: {data.gender}</h2>
            <iframe width="50%" height="200" frameborder="0" allowfullscreen="" scrolling="no" src="https://www.ivoox.com/en/player_ej_64012361_2_1.html?data=l5mdk5eXepKhhpywj5WVaZS1kpeSlaaZdo6ZmKiak5KJe6ShkpKSmaiRdI6ZmKiap9jUpcTd0JC3w9KPaZOnkp2YpKawk6-3prjBsZCRcYy3sLu2ppDJsozgwpC7pKaJdqSfs9Tczc7Jt4ampJKSmaiRidTkwsjW0ZCupc6hhpywj5k.&"></iframe>
            <Link to="/">Back to homepage</Link>
          </>
        )}
      </>
    );
  };


// function Article() {
// // function Article( { match } ) {
//     // const {
//     //     params: { type, id }, 
//     //   } = match;
//     return (
//         <div>
//             <h1 className="">Hello world</h1>
//             <iframe width="100%" height="200" frameborder="0" allowfullscreen="" scrolling="no" src="https://www.ivoox.com/en/player_ej_64012361_2_1.html?data=l5mdk5eXepKhhpywj5WVaZS1kpeSlaaZdo6ZmKiak5KJe6ShkpKSmaiRdI6ZmKiap9jUpcTd0JC3w9KPaZOnkp2YpKawk6-3prjBsZCRcYy3sLu2ppDJsozgwpC7pKaJdqSfs9Tczc7Jt4ampJKSmaiRidTkwsjW0ZCupc6hhpywj5k.&"></iframe>
//         </div>
//     )
// }

export default Article
