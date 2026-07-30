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

  @ViewChild('editor')
  editorElement!: ElementRef<HTMLDivElement>;


  private initialCode = '';
  // Input
  code = input<string>('');
  private editor!: monaco.editor.IStandaloneCodeEditor;

  // Input
  language = input<'html' | 'css' | 'javascript'>('javascript');

  // Output
  codeChange = output<string>();

  ngAfterViewInit() {

    // initialize Monaco here

  }
  async copy() {
    try {
      await navigator.clipboard.writeText(this.editor.getValue());
      console.log('Copied!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  // copy() {

  //   const code = this.editor.getValue();

  //   navigator.clipboard.writeText(code);

  //   console.log('Code copied!');
  // }
  reset() {
    this.codeChange.emit(this.initialCode);

    // If Monaco editor instance exists:
    // this.editor.setValue(this.initialCode);
  }
  onEditorChange(value: string) {
    this.codeChange.emit(value);
  }

}