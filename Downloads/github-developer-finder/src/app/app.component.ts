import { Component } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { GithubService } from './services/github.service';
import { User } from './models/user.model';
import { Repo } from './models/repo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [SearchBarComponent, UserProfileComponent, RepoListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'github-developer-finder';
  user: User | null = null;
  repos: Repo[] = [];
  errorMessage: string = '';

  constructor(private githubService: GithubService) {}

  onSearch(username: string) {
    this.errorMessage = '';
    this.githubService.getUser(username).subscribe({
      next: (user) => {
        this.user = user;
        this.githubService.getRepos(username).subscribe({
          next: (repos) => {
            this.repos = repos;
          },
          error: (err) => {
            this.errorMessage = err.message;
          }
        });
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.user = null;
        this.repos = [];
      }
    });
  }
}
