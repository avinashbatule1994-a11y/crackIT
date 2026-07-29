import { Component, computed, signal } from '@angular/core';
import { WelcomeCard } from '../../../features/dashboard/components/welcome-card/welcome-card';
import { SubjectGrid } from '../../../features/dashboard/components/subject-grid/subject-grid';
import { ProgressCardComponent } from '../../../features/dashboard/components/progress-card/progress-card';
import { ChallengeCard } from '../../../features/dashboard/components/challenge-card/challenge-card';
import { FeaturedQuestions } from '../../../features/dashboard/components/featured-questions/featured-questions';
import { Subject } from '../../../core/models/subject.model';
import { SUBJECTS } from '../../../features/dashboard/data/subjects';
import { SubjectCard } from "../../../features/dashboard/components/subject-card/subject-card";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    WelcomeCard,
    SubjectGrid,
    ProgressCardComponent,
    ChallengeCard,
    FeaturedQuestions,
    // SubjectCard
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {subjects = signal<Subject[]>(SUBJECTS);

  search = signal('');

  filteredSubjects = computed(() => {
    const value = this.search().toLowerCase();

    if (!value) {
      return this.subjects();
    }

    return this.subjects().filter(subject =>
      subject.title.toLowerCase().includes(value)
    );
  });

}