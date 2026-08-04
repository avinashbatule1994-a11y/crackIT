

import {
  Injectable,
  signal
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearningStore {

  bookmarks = signal<string[]>([]);

  recentTopics = signal<string[]>([]);

  completedLessons = signal<string[]>([]);

  addBookmark(slug: string) {

    if (!this.bookmarks().includes(slug)) {

      this.bookmarks.update(items => [...items, slug]);

    }

  }

  removeBookmark(slug: string) {

    this.bookmarks.update(items =>
      items.filter(item => item !== slug)
    );

  }

}