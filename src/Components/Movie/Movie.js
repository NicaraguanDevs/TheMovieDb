import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  render() {
    return (
      <Link to={`/movie/${this.props.id}`}>
        <div className="ui card">
          <div className="image">
            <img
              src={"https://image.tmdb.org/t/p/w154" + this.props.poster_path}
              alt={this.props.title}
            />
          </div>
          <div className="content">
            <div className="header">
              {this.props.title.substring(
                0,
                Math.min(this.props.title.length, 10)
              )}
            </div>
            <div className="meta">
              <span className="date">{this.props.release_date}</span>
            </div>
          </div>
          <div className="extra content">
            <p>{this.props.vote_average}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default Movie;
