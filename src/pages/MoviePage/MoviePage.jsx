import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import SimilarMoviesContainer from "../../Components/SimilarMoviesContainer";

function MoviePage(props) {
  console.log(props);
  const [movie, setmovie] = useState({});
  const [video, setvideo] = useState("");
  const [generos, setgeneros] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=16c54b5cc29a4cc43c2fe52d3be06784&language=es-ES`
    )
      .then(movieParse => movieParse.json())
      .then(movieFinal => {
        setmovie({
          adult: movieFinal.adult,
          overview: movieFinal.overview,
          backdrop_path: movieFinal.backdrop_path,
          belongs_to_collection: movieFinal.belongs_to_collection,
          budget: movieFinal.budget,
          homepage: movieFinal.homepage,
          id: movieFinal.id,
          original_language: movieFinal.original_language,
          original_title: movieFinal.original_title,
          popularity: movieFinal.popularity,
          poster_path: movieFinal.poster_path,
          year: movieFinal.release_date.substring(0, 4),
          runtime: movieFinal.runtime,
          status: movieFinal.status,
          title: movieFinal.title
        });
        setgeneros(
          movieFinal.genres.map((genero, i) => {
            return (
              <li key={i} className="ui blue tag label">
                {genero.name}
              </li>
            );
          })
        );
        fetch(
          `https://api.themoviedb.org/3/movie/${props.match.params.id}/videos?api_key=16c54b5cc29a4cc43c2fe52d3be06784&language=en-EN`
        )
          .then(res => res.json())
          .then(res => {
            setvideo(res.results.key);
          })
          .catch(() => setvideo("866"));
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="ui four column doubling stackable grid container">
        <div className="four wide column">
          <img
            className="ui medium rounded image"
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            alt={movie.title}
          />
        </div>
        <div className="twelve wide column">
          <h1 className="ui header">{movie.title}</h1>
          <span className="ui medium orange text">Titulo original:</span>
          <span className="ui medium text">{movie.original_title}</span>
          <br />
          <span className="ui medium orange text">Year:</span>
          <span className="ui medium text">{movie.year}</span>
          <br />
          <span className="ui medium orange text">Generos:</span>
          <ul>{generos}</ul>
          <hr />
          <span className="ui medium red text">Sinopsis:</span>
          <div className="ui inverted segment">
            <p>{movie.overview}</p>
          </div>
        </div>
        <div className="sixteen wide column">
          <iframe
            width="1200"
            height="540"
            src={`https://www.youtube.com/embed/${video}`}
            title={movie.title}
            allowfullscreen
          ></iframe>
        </div>
        <div className="sixteen wide column">
          <h2 className="ui header">Peliculas Similares</h2>
          <SimilarMoviesContainer id={props.match.params.id} />
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
