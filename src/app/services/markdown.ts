import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  private http = inject(HttpClient);

  load(path: string): Observable<string> {
    return this.http.get(path, {
      responseType: 'text'
    });
  }

}