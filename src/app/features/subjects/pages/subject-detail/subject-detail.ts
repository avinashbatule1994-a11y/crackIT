// import { Component, inject, signal } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

// import { Topic } from '../../../../core/models/topic.model';
// import { ANGULAR_TOPICS } from '../../data/angular-topic';
// import { SubjectStore } from '../../../../core/store/subject.store';

// @Component({
//   selector: 'app-subject-detail',
//   standalone: true,
//   templateUrl: './subject-detail.html',
//   styleUrl: './subject-detail.scss'
// })
// export class SubjectDetail {

//   constructor(
//   private route: ActivatedRoute,
//   public store: SubjectStore
// ){}

//   private router = inject(Router);

//   topics = signal<Topic[]>(ANGULAR_TOPICS);

// ngOnInit() {

//   this.route.paramMap.subscribe(params => {

//     const subject = params.get('subject');

//     if(subject){
//       this.store.setSubject(subject);
//     }

//   });

// }

//   openTopic(topic: Topic) {

//     this.router.navigate([
//       '/subjects:slug',
//       topic.slug
//     ]);

//   }
// }
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Topic } from '../../../../core/models/topic.model';
import { SubjectStore } from '../../../../core/store/subject.store';
import { ANGULAR_TOPICS } from '../../data/angular-topics';

@Component({
  selector: 'app-subject-detail',
  standalone: true,
  templateUrl: './subject-detail.html',
  styleUrl: './subject-detail.scss'
})
export class SubjectDetail {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  // topics = signal<Topic[]>(ANGULAR_TOPICS);  
  public store = inject(SubjectStore);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const subject = params.get('subject');

      if (subject) {
        this.store.setSubject(subject);
      }
    });
  }

  openTopic(topic: Topic) {
    this.router.navigate([
      '/subjects',
      this.store.currentSubject(),
      topic.slug
    ]);
  }
}