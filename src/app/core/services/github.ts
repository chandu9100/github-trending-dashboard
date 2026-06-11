import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  GithubSearchResponse,
  Repository,
} from '../models/repository.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly http = inject(HttpClient);

  getTrendingRepositories():
    Observable<GithubSearchResponse> {

    const date = new Date();

    date.setDate(date.getDate() - 30);

    const formattedDate =
      date.toISOString().split('T')[0];

    return this.http.get<GithubSearchResponse>(
      'https://api.github.com/search/repositories',
      {
        params: {
          q: `created:>${formattedDate}`,
          sort: 'stars',
          order: 'desc',
          per_page: '20',
        },
      }
    );
  }

  getRepository(owner: string,repo: string): Observable<Repository> {

    return this.http.get<Repository>(
      `https://api.github.com/repos/${owner}/${repo}`
    );
  }
}