import { Component, Input } from '@angular/core';
import { Repo } from '../../models/repo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repo-list',
  imports: [CommonModule],
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.css'
})
export class RepoListComponent {
  @Input() repos: Repo[] = [];
}
