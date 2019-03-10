import * as types from "./types";

export const changeSinceParam = newSince => ({
  type: types.CHANGE_SINCE_PARAM,
  newSince
});

export const changeLanguageParam = newLanguage => ({
  type: types.CHANGE_LANGUAGE_PARAM,
  newLanguage
});

export const changeStarSort = newStarSort => ({
  type: types.CHANGE_START_SORT,
  newStarSort
});

export const reposReceived = repos => ({
  type: types.REPOS_RECEIVED,
  repos
});
