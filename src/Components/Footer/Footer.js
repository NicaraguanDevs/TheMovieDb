import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="ui stackable grid three column center aligned container">
                    <div className="column">
                        <img src="https://i.ibb.co/g3XJxD3/logo.png" width="192" height="58" alt=""/>
                        <p>Find your favorite movie and TV shows</p>
                    </div>
                    <div className="column">
                        <img
                            src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png"
                            width="204"
                            height="80"
                            alt=""
                        />
                    </div>
                    <div className="column">
                        <h3>Made by: </h3>
                        <a href="https://github.com/daveflr" className="large ui circular github icon button">
                            <i className="github icon"/> Daveflr
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;