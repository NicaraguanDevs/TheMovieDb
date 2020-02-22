import React, { Component } from 'react'
import Navbar from "../../Components/Navbar";
import Carousel from "../../Components/Carousel";
import MoviesContainer from "../../Components/MoviesContainer";
import Upcoming from "../../Components/Upcoming";
import Footer from "../../Components/Footer";

class MainPage extends Component {
    render() {
        return (
            <main>
                <Navbar/>
                <Carousel/>
                <div className="ui stackable two column grid container movies-container">
                    <div className="twelve wide column">
                        <MoviesContainer/>
                    </div>
                    <div className="four wide column">
                        <Upcoming/>
                    </div>
                </div>
                <Footer/>
            </main>
        )
    }
}

export default MainPage;
