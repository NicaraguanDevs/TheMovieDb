import React, {Component} from 'react';
import axios from 'axios'
import Item from "./Item";

class Upcoming extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            movies: [],
        }
    }

    componentDidMount() {
        const getUpcoming = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=16c54b5cc29a4cc43c2fe52d3be06784&language=es-es&page=${this.state.page}`);
                let movies = response.data.results.map(movie => {
                    return (
                        <Item
                            key={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title}
                            release_date={movie.release_date}
                        />
                    );
                });
                this.setState({movies});
            } catch (e) {
                console.log(e);
            }
        };
        getUpcoming();
    }

    render() {
        return (
            <section>
                <h1>Upcoming</h1>
                <div className="ui link celled large list">
                    {this.state.movies}
                </div>
            </section>
        );
    }
}

export default Upcoming;