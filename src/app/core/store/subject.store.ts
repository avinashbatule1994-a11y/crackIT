// import {
//   Injectable,
//   computed,
//   signal
// } from '@angular/core';

import { computed, Injectable, signal } from "@angular/core";
import { Topic } from "../models/topic.model";
import { SUBJECT_TOPICS } from "../../features/subjects/data/subject-topics";

// import { Topic } from '../models/topic.model';
import { ANGULAR_TOPICS } from '../../features/subjects/data/angular-topic';
// import { SUBJECT_TOPICS } from '../../features/subjects/data/subject-topics';

// @Injectable({
//   providedIn: 'root'
// })
// export class SubjectStore {

//   private readonly _topics = signal<Topic[]>(ANGULAR_TOPICS);

//   private readonly _currentSubject = signal('angular');

//   readonly topics = this._topics.asReadonly();

//   readonly currentSubject = this._currentSubject.asReadonly();

//   readonly totalTopics = computed(() => this._topics().length);

//   readonly completedTopics = computed(() =>
//     this._topics().filter(x => x.completed).length
//   );

//   readonly progress = computed(() => {

//     const total = this.totalTopics();

//     if (total === 0) return 0;

//     return Math.round(
//       (this.completedTopics() / total) * 100
//     );

//   });

//   // setSubject(subject: string) {
//   //   this._currentSubject.set(subject);
//   // }

//   setSubject(subject: string) {

//   this._currentSubject.set(subject);

//   this._topics.set(
//     SUBJECT_TOPICS[subject] ?? []
//   );

// }
//   markCompleted(slug: string) {

//     this._topics.update(topics =>
//       topics.map(topic =>
//         topic.slug === slug
//           ? { ...topic, completed: true }
//           : topic
//       )
//     );

//   }

// }


// import { Injectable, computed, signal } from '@angular/core';
// import { Topic } from '../models/topic.model';
// import { SUBJECT_TOPICS } from '../../features/subjects/data/subject-topics';
// import { ActivatedRoute } from '@angular/router';
// import { inject } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SubjectStore {
// private route = inject(ActivatedRoute);
// private store = inject(SubjectStore);
//   private readonly _currentSubject = signal('angular');

//   private readonly _topics = signal<Topic[]>(
//     SUBJECT_TOPICS['angular']
//   );

//   readonly currentSubject = this._currentSubject.asReadonly();
//   readonly topics = this._topics.asReadonly();


//   readonly progress = computed(() => {

//     const topics = this._topics();

//     if (!topics.length) {
//       return 0;
//     }

//     const completed = topics.filter(t => t.completed).length;

//     return Math.round((completed / topics.length) * 100);
//   });

//   ngOnInit() {
//   this.route.paramMap.subscribe(params => {
//     const slug = params.get('slug');

//     if (slug) {
//       this.store.setSubject(slug);
//     }
//   });
// }
//   setSubject(subject: string) {

//     this._currentSubject.set(subject);

//     this._topics.set(
//       SUBJECT_TOPICS[subject] ?? []
//     );

//   }

//   markCompleted(slug: string) {

//     this._topics.update(topics =>
//       topics.map(topic =>
//         topic.slug === slug
//           ? { ...topic, completed: true }
//           : topic
//       )
//     );

//   }
// }



@Injectable({
  providedIn: 'root'
})
export class SubjectStore {

  private readonly _currentSubject = signal('angular');

  private readonly _topics = signal<Topic[]>(
    SUBJECT_TOPICS['angular']
  );

  readonly currentSubject = this._currentSubject.asReadonly();
  readonly topics = this._topics.asReadonly();

  readonly progress = computed(() => {
    const topics = this._topics();

    if (!topics.length) return 0;

    const completed = topics.filter(t => t.completed).length;

    return Math.round((completed / topics.length) * 100);
  });

  setSubject(subject: string) {

    console.log('Subject:', subject);
    console.log(SUBJECT_TOPICS[subject]);
    this._currentSubject.set(subject);
    this._topics.set(SUBJECT_TOPICS[subject] ?? []);
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