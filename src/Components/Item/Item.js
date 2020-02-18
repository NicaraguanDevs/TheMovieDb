import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <a className="item" href={"https://image.tmdb.org/t/p/original" + this.props.poster_path}>
                <img className="ui avatar image" src={"https://image.tmdb.org/t/p/w92" + this.props.poster_path} alt=""/>
                <div className="content">
                    <div className="header">{this.props.title}</div>
                    <div className="description">{this.props.release_date}</div>
                </div>
            </a>
        );
    }
}

export default Item;