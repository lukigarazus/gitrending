import React from "react";
import { connect } from "react-redux";
import SingleRepo from "./SingleRepo";

const filterTypeToFunc = new Proxy(
  {
    ascending: (a, b) => a.stars - b.stars,
    descending: (a, b) => b.stars - a.stars,
    default: () => 0
  },
  {
    get(t, p) {
      return t[p] || t.default;
    }
  }
);

class ReposList extends React.Component {
  render() {
    return (
      <div className="repos-list">
        {this.props.loading && (
          <div className="loader-container">
            <div className="loader" />
          </div>
        )}
        {this.props.repos
          .sort(filterTypeToFunc[this.props.starSort])
          .map(repo => (
            <SingleRepo {...repo} />
          ))}
        <style jsx>{`
          .repos-list {
            position: relative;
            height: calc(100vh - 220px);
            overflow-y: scroll;
          }
          .loader-container {
            position: absolute;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: black;
            opacity: 0.8;
          }
          .loader {
            color: white;
            font-size: 15px;
            margin: 100px auto;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            position: relative;
            text-indent: -9999em;
            -webkit-animation: load4 1.3s infinite linear;
            animation: load4 1.3s infinite linear;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
          }
          @-webkit-keyframes load4 {
            0%,
            100% {
              box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em,
                2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em,
                -2em -2em 0 0;
            }
            12.5% {
              box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0,
                2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em,
                -2em -2em 0 -1em;
            }
            25% {
              box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em,
                2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em,
                -2em -2em 0 -1em;
            }
            37.5% {
              box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0,
                2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em,
                -2em -2em 0 -1em;
            }
            50% {
              box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em,
                2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em,
                -2em -2em 0 -1em;
            }
            62.5% {
              box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em,
                2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0,
                -2em -2em 0 -1em;
            }
            75% {
              box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
                2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
                -2em -2em 0 0;
            }
            87.5% {
              box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em,
                2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0,
                -2em -2em 0 0.2em;
            }
          }
          @keyframes load4 {
            0%,
            100% {
              box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em,
                2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em,
                -2em -2em 0 0;
            }
            12.5% {
              box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0,
                2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em,
                -2em -2em 0 -1em;
            }
            25% {
              box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em,
                2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em,
                -2em -2em 0 -1em;
            }
            37.5% {
              box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0,
                2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em,
                -2em -2em 0 -1em;
            }
            50% {
              box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em,
                2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em,
                -2em -2em 0 -1em;
            }
            62.5% {
              box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em,
                2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0,
                -2em -2em 0 -1em;
            }
            75% {
              box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
                2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
                -2em -2em 0 0;
            }
            87.5% {
              box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em,
                2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0,
                -2em -2em 0 0.2em;
            }
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = ({ starSort, repos, loading }) => ({
  repos,
  starSort,
  loading
});
export default connect(mapStateToProps)(ReposList);
