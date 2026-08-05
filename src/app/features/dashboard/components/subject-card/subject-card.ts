import { Component, inject, input } from '@angular/core';
import { Subject } from '../../../../core/models/subject.model';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SubjectStore } from '../../../../core/store/subject.store';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  imports: [
    CommonModule,
    ProgressBarModule,
    CardModule,
    ButtonModule,
    TagModule,
    AvatarModule,
    BadgeModule,
    InputTextModule
  ],
  templateUrl: './subject-card.html',
  styleUrl: './subject-card.scss',
})
export class SubjectCard {
  subject = input.required<Subject>();
  private router = inject(Router);
  private store = inject(SubjectStore);

openSubject(subject: Subject) {

  // console.log('Navigating to:', subject.slug);

  this.store.setSubject(subject.slug);

  this.router.navigate(['/subjects', subject.slug]);
}



}