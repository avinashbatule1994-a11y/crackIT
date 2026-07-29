// import {
//   AfterViewInit,
//   Component,
//   ElementRef,
//   ViewChild
// } from '@angular/core';

// import * as monaco from 'monaco-editor';

// @Component({
//   selector:'app-monaco-editor',
//   standalone:true,
//   templateUrl:'./monaco-editor.html',
//   styleUrl:'./monaco-editor.scss'
// })
// export class MonacoEditor implements AfterViewInit{

//   @ViewChild('editor',{static:true})

//   editorElement!:ElementRef;

//   editor!:monaco.editor.IStandaloneCodeEditor;

//   ngAfterViewInit():void{

//     this.editor=monaco.editor.create(

//       this.editorElement.nativeElement,

//       {

//         value:

// `function greet(){

// console.log("Hello CrackIT");

// }

// greet();`,

// language:'typescript',

// theme:'vs-dark',

// automaticLayout:true,

// minimap:{
// enabled:false
// }

//       }

//     );

//   }

// }

import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
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
  editorRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {

    self.MonacoEnvironment = {

      getWorker(_, label) {

        if (label === 'typescript' || label === 'javascript') {

          return new Worker(
            new URL('../../../../ts.worker', import.meta.url),
            { type: 'module' }
          );

        }

        return new Worker(
          new URL('../../../../editor.worker', import.meta.url),
          { type: 'module' }
        );

      }

    };

    monaco.editor.create(this.editorRef.nativeElement, {

      value: `function greet(){

console.log("Welcome To CrackIT");

}

greet();`,

      language: 'typescript',

      theme: 'vs-dark',

      automaticLayout: true,

      minimap: {

        enabled: false

      }

    });

  }

}