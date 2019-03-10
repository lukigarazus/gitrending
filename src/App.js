import React, { Component } from "react";
import ReposList from "./components/ReposList";
import Filters from "./components/Filters";
class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <img src={`${process.env.PUBLIC_URL}/mark-github.svg`} />
          <h1>Trending Repos</h1>
        </header>
        <Filters />
        <ReposList repos={this.props.repos} />
        <style>{`
          header {
            height: 50px;
            display: flex;
          }
          header > img {
            height: 50px;
            margin-right: 10px;
          }
          header > h1 {
            margin: 0;
            line-height: 50px;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
