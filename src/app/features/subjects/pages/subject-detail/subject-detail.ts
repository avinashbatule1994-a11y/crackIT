import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ANGULAR_TOPICS } from '../../data/angular-topic';
import { Topic } from '../../../../core/models/topic.model';

@Component({
  selector: 'app-subject-detail',
  standalone: true,
  imports: [],
  templateUrl: './subject-detail.html',
  styleUrl: './subject-detail.scss',
})
export class SubjectDetail {

  private router = inject(Router);

  topics = signal<Topic[]>(ANGULAR_TOPICS);

  openTopic(topic: Topic) {
    this.router.navigate([
      '/subjects',
      'angular',
      topic.slug
    ]);
  }
}