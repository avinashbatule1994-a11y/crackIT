import { Component } from '@angular/core';
import { WelcomeCard } from '../../../features/dashboard/components/welcome-card/welcome-card';
import { SubjectGrid } from '../../../features/dashboard/components/subject-grid/subject-grid';
import { ProgressCardComponent } from '../../../features/dashboard/components/progress-card/progress-card';
import { ChallengeCard } from '../../../features/dashboard/components/challenge-card/challenge-card';
import { FeaturedQuestions } from '../../../features/dashboard/components/featured-questions/featured-questions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WelcomeCard,
    SubjectGrid,
    ProgressCardComponent,
    ChallengeCard,
    FeaturedQuestions

  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {}