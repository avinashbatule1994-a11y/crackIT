import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Markdown {

  private http = inject(HttpClient);

  load(path: string) {
    return this.http.get(path, {
      responseType: 'text'
    });
  }

}