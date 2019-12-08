import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css'
import Movie from "./Movie";

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            params: {
                slidesPerView: 6,
                spaceBetween: 50,
                loop: true,
                // autoplay: {
                //     delay: 2500,
                //     disableOnInteraction: false
                // },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
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
            },
        }
    }

    componentDidMount() {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=16c54b5cc29a4cc43c2fe52d3be06784&language=es-es&page=1`;
        fetch(url)
            .then(response => response.json())
            .then(result => {
                let movies = result.results.map(movie => {
                    return (
                        <div key={movie.id} className="swiper-slide">
                            <Movie
                                key={movie.id}
                                poster_path={movie.poster_path}
                                title={movie.title}
                                vote_average={movie.vote_average}
                                original_title={movie.original_title}
                                release_date={movie.release_date}
                            />
                        </div>
                    );
                });
                this.setState({movies})
            });
    }

    render() {
        return this.state.movies.length > 0 ? (
            <div className="ui container">
                <Swiper {...this.state.params}>
                    {this.state.movies}
                </Swiper>
            </div>
        ) : false;
    }
}
