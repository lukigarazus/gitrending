import { setCookie } from "../utils";

const gitrending = (state: Store, action: Action) => {
  switch (action.type) {
    case "CHANGE_SINCE_PARAM":
      setCookie("since", action.newSince);
      return { ...state, since: action.newSince, loading: true };
    case "CHANGE_LANGUAGE_PARAM":
      setCookie("language", action.newLanguage);
      return { ...state, language: action.newLanguage, loading: true };
    case "CHANGE_STAR_SORT":
      setCookie("starSort", action.newStarSort);
      return { ...state, starSort: action.newStarSort };
    case "REPOS_RECEIVED":
      return { ...state, repos: action.repos, loading: false };
    default:
      return state;
  }
};

export default gitrending;
