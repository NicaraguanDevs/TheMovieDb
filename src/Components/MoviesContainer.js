import React, {Component} from 'react';
import axios from 'axios';
import Movie from "./Movie";

class MoviesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 2,
            movies: []
        }
    }

    componentDidMount() {
        const getMovies = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=16c54b5cc29a4cc43c2fe52d3be06784&language=es-es&page=${this.state.page}`);
                let movies = response.data.results.map(movie => {
                    return (
                        <Movie
                            key={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title}
                            vote_average={movie.vote_average}
                            original_title={movie.original_title}
                            release_date={movie.release_date}
                        />
                    );
                });
                this.setState({movies});
            } catch (error) {
                console.log(error)
            }
        };
        getMovies()
    }

    render() {
        return (
            <section>
                <h1>Movies</h1>
                <div className="ui five doubling cards">
                    {this.state.movies}
                </div>
            </section>
        );
    }
}

export default MoviesContainer;