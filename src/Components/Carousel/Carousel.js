import React, { Component } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.min.css";
import Movie from "../Movie";
import axios from "axios";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      params: {
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
      }
    };
  }

  async getMovies() {
    try {
      const response = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=16c54b5cc29a4cc43c2fe52d3be06784&language=es-es&page=1`
      );
      let movies = response.data.results.map((movie, i) => {
        return (
          <div key={movie.id} className="swiper-slide">
            <Movie
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
      this.setState({ movies });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return this.state.movies.length > 0 ? (
      <div className="ui carousel container">
        <Swiper {...this.state.params}>{this.state.movies}</Swiper>
      </div>
    ) : (
      false
    );
  }
}
