import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import { Topic } from '../models/topic.model';
import { ANGULAR_TOPICS } from '../../features/subjects/data/angular-topic';

@Injectable({
  providedIn: 'root'
})
export class SubjectStore {

  private readonly _topics = signal<Topic[]>(ANGULAR_TOPICS);

  private readonly _currentSubject = signal('angular');

  readonly topics = this._topics.asReadonly();

  readonly currentSubject = this._currentSubject.asReadonly();

  readonly totalTopics = computed(() => this._topics().length);

  readonly completedTopics = computed(() =>
    this._topics().filter(x => x.completed).length
  );

  readonly progress = computed(() => {

    const total = this.totalTopics();

    if (total === 0) return 0;

    return Math.round(
      (this.completedTopics() / total) * 100
    );

  });

  setSubject(subject: string) {
    this._currentSubject.set(subject);
  }

  markCompleted(slug: string) {

    this._topics.update(topics =>
      topics.map(topic =>
        topic.slug === slug
          ? { ...topic, completed: true }
          : topic
      )
    );

  }

}