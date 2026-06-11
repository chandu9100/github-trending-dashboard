export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;

  stargazers_count: number;
  forks_count: number;
  watchers_count: number;

  open_issues_count: number;
  default_branch: string;
  updated_at: string;

  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface GithubSearchResponse {
  items: Repository[];
}