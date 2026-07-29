import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/dashboard-layout/dashboard-layout').then(
        (m) => m.DashboardLayout
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/pages/dashboard/dashboard').then(
            (m) => m.Dashboard
          ),
      },

      // Subjects
      {
        path: 'subjects',
        loadComponent: () =>
          import('./features/subjects/pages/subject-list/subject-list').then(
            (m) => m.SubjectList
          ),
      },
      {
        path: 'subjects/:subject',
        loadComponent: () =>
          import('./features/subjects/pages/subject-detail/subject-detail').then(
            (m) => m.SubjectDetail
          ),
      },
      {
        path: 'subjects/:subject/:topic',
        loadComponent: () =>
          import('./features/subjects/pages/topic-detail/topic-detail').then(
            (m) => m.TopicDetail
          ),
      },

      // Interview
      {
        path: 'interview',
        loadComponent: () =>
          import('./features/interview/pages/interview/interview').then(
            (m) => m.Interview
          ),
      },

      // MCQ
      {
        path: 'mcq',
        loadComponent: () =>
          import('./features/mcq/pages/mcq/mcq').then((m) => m.Mcq),
      },

      // Progress
      {
        path: 'progress',
        loadComponent: () =>
          import('./features/progress/pages/progress/progress').then(
            (m) => m.Progress
          ),
      },
    ],
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout').then(
        (m) => m.AuthLayout
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/auth/pages/login/login').then(
            (m) => m.Login
          ),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];