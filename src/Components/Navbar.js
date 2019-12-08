import React, {Component} from 'react'
import 'bulma/css/bulma.min.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="https://i.ibb.co/g3XJxD3/logo.png" width="122" height="38" alt=""/>
                    </a>

                    <a onClick={this.toggleNavbar} href="http://" role="button" className="navbar-burger burger" aria-label="menu"
                       aria-expanded="false"
                       data-target="navBarMain">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>

                <div id="navBarMain" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/" className="navbar-item">
                            Movies
                        </a>

                        <a href="/" className="navbar-item">
                            TV Series
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a href="/" className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a href="/" className="navbar-item">
                                    Premium
                                </a>
                                <a href="/" className="navbar-item">
                                    Ads
                                </a>
                                <a href="/" className="navbar-item">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a href="/" className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a href="/" className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    toggleNavbar(e) {
        e.preventDefault();

        let burger = document.querySelector('.navbar-burger');

        const target = burger.dataset.target;
        let $target = document.getElementById(target);

        burger.classList.toggle('is-active');
        $target.classList.toggle('is-active');

    }
}
