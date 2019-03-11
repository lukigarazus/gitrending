type Repo = {
  author: string,
  name: string,
  url: string,
  description: string,
  language: string,
  languageColor: string,
  stars: number,
  forks: number,
  currentPeriodStars: number,
  builtBy: Array<Object>
};

type Action = {
  type: string,
  newSince?: string,
  newLanguage?: string,
  newStarSort?: string,
  repos?: Array<Repo>,
  loading?: boolean
};

type Store = {
  language: string,
  since: void | "daily" | "weekly" | "monthly",
  starSort: void | "ascending" | "descending",
  repos: Array<Repo>,
  loading: boolean
};

type ReposListProps = {
  loading: boolean,
  repos: Array<Repo>,
  starSort: void | "ascending" | "descending"
};

type FiltersProps = {
  language: string,
  since: string,
  starSort: string,
  dispatch: Function
};
