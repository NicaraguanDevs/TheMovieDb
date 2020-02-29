import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Movie";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.min.css";

function SimilarMoviesContainer(props) {
  const [movies, setmovies] = useState([]);
  const [params] = useState({
    slidesPerView: 6,
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  });

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await axios(
        `https://api.themoviedb.org/3/movie/${props.id}/similar?api_key=16c54b5cc29a4cc43c2fe52d3be06784&language=en-US&page=1`
      );
      let movies = response.data.results.map((movie, i) => {
        return (
          <div className="swiper-slide">
            <Movie
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
              original_title={movie.original_title}
              release_date={movie.release_date}
            />
          </div>
        );
      });
      setmovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  return movies.length > 0 ? (
    <div className="ui carousel container">
      <Swiper {...params}>{movies}</Swiper>
    </div>
  ) : (
    false
  );
}

export default SimilarMoviesContainer;
