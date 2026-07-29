import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearningStore {

  completedTopics = signal<string[]>([]);

  bookmarks = signal<string[]>([]);

  recentlyVisited = signal<string[]>([]);

}