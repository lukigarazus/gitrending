import { GITHUB_API_BASE_URL } from "../constants";

const getURLWithParameters = parameters => {
  const entries = Object.entries(parameters);
  if (entries.length) {
    const paramsString = entries.map(entry => entry.join("=")).join("&");
    return `${GITHUB_API_BASE_URL}?${paramsString}`;
  } else return GITHUB_API_BASE_URL;
};

export const fetchGithubTrendingAPIs = (parameters, callback) =>
  fetch(getURLWithParameters(parameters))
    .then(result => result.json())
    .then(callback)
    .catch(e => console.log(e));

export const setCookie = (name, value) => {
  var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days
  document.cookie =
    name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
};

export const getCookie = name => {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length == 2)
    return parts
      .pop()
      .split(";")
      .shift();
};
