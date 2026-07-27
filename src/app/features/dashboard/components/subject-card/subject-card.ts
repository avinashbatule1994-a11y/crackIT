import { Component, input } from '@angular/core';
import { Subject } from '../../../../core/models/subject.model';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  imports: [
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
  
}