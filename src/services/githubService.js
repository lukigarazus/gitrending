import { fetchGithubTrendingAPIs } from "../utils/index";
import {
  GET_REPOS,
  CHANGE_LANGUAGE_PARAM,
  CHANGE_SINCE_PARAM
} from "../actions/types";
import { reposReceived } from "../actions";

const githubService = store => next => action => {
  const resetRepos = () => {
    const state = store.getState();
    fetchGithubTrendingAPIs(
      { language: state.language, since: state.since },
      data => next(reposReceived(data))
    );
  };
  next(action);
  if (
    [GET_REPOS, CHANGE_LANGUAGE_PARAM, CHANGE_SINCE_PARAM].includes(action.type)
  )
    resetRepos();
};

export default githubService;
