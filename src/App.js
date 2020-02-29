import React from "react";
import "./Styles/App.css";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviePage from "./pages/MoviePage/MoviePage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/movie/:id" render={props => <MoviePage {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
