// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-monaco-editor',
//   imports: [],
//   templateUrl: './monaco-editor.html',
//   styleUrl: './monaco-editor.scss',
// })
// export class MonacoEditor {}
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  signal
} from '@angular/core';

@Component({
  selector: 'app-monaco-editor',
  standalone: true,
  templateUrl: './monaco-editor.html',
  styleUrl: './monaco-editor.scss'
})
export class MonacoEditorComponent implements AfterViewInit {

  @ViewChild('editor')
  editorElement!: ElementRef<HTMLDivElement>;

  code = signal(`function greet(){

console.log("Welcome To CrackIT");

}

greet();`);

  ngAfterViewInit() {

    // Monaco initialization here

  }

  copy() {

    navigator.clipboard.writeText(this.code());

  }

  reset() {

    this.code.set(`function greet(){

console.log("Welcome To CrackIT");

}

greet();`);

  }

}