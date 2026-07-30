// import {
//   AfterViewInit,
//   Component,
//   ElementRef,
//   ViewChild,
//   input,
//   output
// } from '@angular/core';

// import * as monaco from 'monaco-editor';

// @Component({
//   selector: 'app-monaco-editor',
//   standalone: true,
//   templateUrl: './monaco-editor.html',
//   styleUrl: './monaco-editor.scss'
// })
// export class MonacoEditorComponent implements AfterViewInit {

//   @ViewChild('editorContainer', { static: true })
//   editorContainer!: ElementRef<HTMLDivElement>;

//   code = input<string>('');

//   language = input<string>('javascript');

//   codeChange = output<string>();

//   private editor!: monaco.editor.IStandaloneCodeEditor;

//   ngAfterViewInit() {

//     this.editor = monaco.editor.create(
//       this.editorContainer.nativeElement,
//       {
//         value: this.code(),
//         language: this.language(),
//         theme: 'vs-dark',
//         automaticLayout: true
//       }
//     );

//     this.editor.onDidChangeModelContent(() => {
//       this.codeChange.emit(this.editor.getValue());
//     });
//   }
// }

import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  input,
  output
} from '@angular/core';

import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-monaco-editor',
  standalone: true,
  templateUrl: './monaco-editor.html',
  styleUrl: './monaco-editor.scss'
})
export class MonacoEditorComponent implements AfterViewInit {

  @ViewChild('editor', { static: true })
  editorElement!: ElementRef<HTMLDivElement>;

  code = input('');

  language = input('javascript');

  codeChange = output<string>();

  private editor!: monaco.editor.IStandaloneCodeEditor;

  ngAfterViewInit(): void {

    this.editor = monaco.editor.create(
      this.editorElement.nativeElement,
      {
        value: this.code(),
        language: this.language(),
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: {
          enabled: false
        },
        fontSize: 15
      }
    );

    this.editor.onDidChangeModelContent(() => {

      this.codeChange.emit(
        this.editor.getValue()
      );

    });

  }

  copy() {

    navigator.clipboard.writeText(

      this.editor.getValue()

    );

  }

  reset() {

    this.editor.setValue('');

    this.codeChange.emit('');

  }

}