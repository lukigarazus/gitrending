import React from "react";
import { connect } from "react-redux";
import SingleRepo from "./SingleRepo";

const filterTypeToFunc = {
  ascending: (a, b) => a.stars - b.stars,
  descending: (a, b) => b.stars - a.stars,
  default: () => 0
};

const ReposList = ({ loading, repos, starSort }: ReposListProps) => {
  return (
    <div className="repos-list">
      {loading && (
        <div className="loader-container">
          <div className="loader" />
        </div>
      )}
      {repos.sort(filterTypeToFunc[starSort || "default"]).map(repo => (
        <SingleRepo {...repo} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ starSort, repos, loading }: Store) => ({
  repos,
  starSort,
  loading
});
export default connect(mapStateToProps)(ReposList);
