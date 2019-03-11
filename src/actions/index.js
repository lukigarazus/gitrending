import * as types from "./types";

export const changeSinceParam = (newSince: "daily" | "monthly" | "weekly") => ({
  type: types.CHANGE_SINCE_PARAM,
  newSince
});

export const changeLanguageParam = (newLanguage: string) => ({
  type: types.CHANGE_LANGUAGE_PARAM,
  newLanguage
});

export const changeStarSort = (newStarSort: "ascending" | "descending") => ({
  type: types.CHANGE_START_SORT,
  newStarSort
});

export const reposReceived = (repos: Array<Repo>) => ({
  type: types.REPOS_RECEIVED,
  repos
});
