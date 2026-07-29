import {
  Component,
  input,
  inject,
  signal,
  effect
} from '@angular/core';
import { MarkdownService } from '../../../../services/markdown';
import { marked } from 'marked';

@Component({
  selector: 'app-markdown-viewer',
  standalone: true,
  templateUrl: './markdown-viewer.html',
  styleUrl: './markdown-viewer.scss'
})
export class MarkdownViewer {

  markdown = input('');

  html = signal('');

  private service = inject(MarkdownService);

  constructor() {

    effect(() => {

      const file = this.markdown();

      if (!file) return;

      this.service.load(file).subscribe(text => {

        // this.html.set(text);

        this.html.set(marked.parse(text) as string);
      });

    });

  }

}