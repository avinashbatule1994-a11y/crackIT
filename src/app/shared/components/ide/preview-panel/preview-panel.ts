import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  ViewChild,
  effect
} from '@angular/core';

@Component({
  selector: 'app-preview',
  standalone: true,
  templateUrl: './preview-panel.html',
  styleUrl: './preview-panel.scss'
})
export class PreviewPanel implements AfterViewInit {

  @ViewChild('frame')
  frame!: ElementRef<HTMLIFrameElement>;

  html = input('');

  css = input('');

  javascript = input('');

  ngAfterViewInit() {

    effect(() => {

      this.render();

    });

  }

  render() {

    if (!this.frame) return;

    const document =
      this.frame.nativeElement.contentWindow!.document;

    document.open();

    document.write(`
      <!DOCTYPE html>
      <html>

      <head>

      <style>

      ${this.css()}

      </style>

      </head>

      <body>

      ${this.html()}

      <script>

      ${this.javascript()}

      <\/script>

      </body>

      </html>
    `);

    document.close();

  }

}