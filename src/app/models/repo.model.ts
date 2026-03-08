export interface Repo {
    id: number;
    name: string;
    description: string | null;
    stargazers_count: number;
    language: string | null;
    html_url: string;
    forks_count: number;
    updated_at: string;
}
