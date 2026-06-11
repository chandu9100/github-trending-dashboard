import { Component, inject, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import { GithubService } from '../../core/services/github';
import { Repository } from '../../core/models/repository.model';

@Component({
  selector: 'app-repository-details',
  imports: [
    CommonModule,
    RouterLink,
    DatePipe
  ],
  templateUrl: './repository-details.html',
  styleUrl: './repository-details.css',
})
export class RepositoryDetails {

  private route = inject(ActivatedRoute);
  private githubService = inject(GithubService);

  repository =
    signal<Repository | null>(null);

  ngOnInit() {

    const owner =
      this.route.snapshot.paramMap.get('owner');

    const repo =
      this.route.snapshot.paramMap.get('repo');

    if (owner && repo) {

      this.githubService
        .getRepository(owner, repo)
        .subscribe((response) => {

          this.repository.set(response);

        });
    }
  }
}