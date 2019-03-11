import React, { Component } from "react";
import ReposList from "./components/ReposList";
import Filters from "./components/Filters";
class App extends Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <header>
          <img src={`${process.env.PUBLIC_URL || ""}/mark-github.svg`} />
          <h1>Trending Repos</h1>
        </header>
        <Filters />
        <ReposList />
      </div>
    );
  }
}

export default App;
