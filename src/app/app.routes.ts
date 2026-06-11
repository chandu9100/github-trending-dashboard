import { Routes } from '@angular/router';

import { Dashboard } from './features/dashboard/dashboard';
import { RepositoryDetails } from './features/repository-details/repository-details';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'repository/:owner/:repo',
    component: RepositoryDetails,
  },
  {
    path: '**',
    redirectTo: '',
  },
];