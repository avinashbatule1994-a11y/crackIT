
// import {
//   Component,
//   computed,
//   input,
//   signal
// } from '@angular/core';

// import {
//   RouterLink,
//   RouterLinkActive
// } from '@angular/router';
// import { Topic } from '../../../../core/models/topic.model';


// @Component({
//   selector: 'app-subject-sidebar',
//   standalone: true,
//   imports: [
//     RouterLink,
//     RouterLinkActive
//   ],
//   templateUrl: './subject-sidebar.html',
//   styleUrl: './subject-sidebar.scss'
// })
// export class SubjectSidebar {

//   topics = input.required<Topic[]>();

//   subject = input.required<string>();

//   search = signal('');

//   filteredTopics = computed(() => {

//     const keyword = this.search().toLowerCase();

//     return this.topics().filter(topic =>
//       topic.title.toLowerCase().includes(keyword)
//     );

//   });

//   completed = computed(() =>
//     this.topics().filter(t => t.completed).length
//   );

//   percentage = computed(() =>
//     Math.round(
//       (this.completed() / this.topics().length) * 100
//     )
//   );

// }

import {
  Component,
  inject
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { SubjectStore } from '../../../../core/store/subject.store';

@Component({
  selector: 'app-subject-sidebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './subject-sidebar.html',
  styleUrl: './subject-sidebar.scss'
})
export class SubjectSidebar {

  store = inject(SubjectStore);

}