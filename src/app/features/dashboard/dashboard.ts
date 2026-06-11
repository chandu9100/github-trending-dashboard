import {
  Component,
  inject,
  signal,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { GithubService } from '../../core/services/github';
import { Repository } from '../../core/models/repository.model';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {

  private githubService = inject(GithubService);
  private router = inject(Router);

  repositories = signal<Repository[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {

    this.githubService
      .getTrendingRepositories()
      .subscribe({

        next: (response) => {

          this.repositories.set(
            response.items
          );

          this.loading.set(false);

          console.log(
            'Repositories:',
            this.repositories().length
          );
        },

        error: (error) => {

          console.error(error);

          this.error.set(
            'Unable to load repositories'
          );

          this.loading.set(false);
        },
      });
  }

  viewRepository(
    repo: Repository
  ): void {

    this.router.navigate([
      '/repository',
      repo.owner.login,
      repo.name,
    ]);
  }
}