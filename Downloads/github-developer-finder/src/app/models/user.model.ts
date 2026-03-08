export interface User {
  login: string;
  avatar_url: string;
  name: string;
  bio: string | null;
  location: string | null;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
  blog: string | null;
  company: string | null;
}
