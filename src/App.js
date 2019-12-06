import React from 'react';
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Carousel/>
            </div>

        );
    }
}

export default App;
