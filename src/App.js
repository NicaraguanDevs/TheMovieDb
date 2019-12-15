import React from 'react';
import './Styles/App.css'
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import MoviesContainer from "./Components/MoviesContainer";
import Footer from "./Components/Footer";
import Upcoming from "./Components/Upcoming";

class App extends React.Component {
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

        );
    }
}

export default App;
