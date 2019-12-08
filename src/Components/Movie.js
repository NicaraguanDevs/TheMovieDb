import React, {Component} from 'react';
import '../Styles/Movie.css'

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popularity: '',
            vote_count: '',
            video: '',
            poster_path: '',
            id: '',
            adult: '',
            backdrop_path: '',
            original_language: '',
            original_title: '',
            genre_ids: [],
            title: '',
            vote_average: '',
            overview: '',
            release_date: ''
        };
    }

    render() {
        return (
            <a className="ui card" href={"https://image.tmdb.org/t/p/original" + this.props.poster_path}>
                <div className="image">
                    <img src={"https://image.tmdb.org/t/p/w154" + this.props.poster_path} alt={this.props.title}/>
                </div>
                <div className="content">
                    <div
                        className="header">{this.props.title.substring(0, Math.min(this.props.title.length, 10))}</div>
                    <div className="meta">
                        <span className="date">{this.props.release_date}</span>
                    </div>
                </div>
                <div className="extra content">
                    <p>{this.props.vote_average}</p>
                </div>
            </a>
        );
    }
}

export default Movie;