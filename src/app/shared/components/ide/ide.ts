import { Component, output, signal } from '@angular/core';
import { MonacoEditorComponent } from '../monaco-editor/monaco-editor';
import { PreviewPanel } from './preview-panel/preview-panel';

@Component({
  selector: 'app-ide',
  standalone: true,
  imports: [
    MonacoEditorComponent,
    PreviewPanel
  ],
  templateUrl: './ide.html',
  styleUrl: './ide.scss'
})
export class IdeComponent {

  copy = output<void>();
  reset = output<void>();
  run = output<void>();
  activeTab = signal('html');

  html = signal(`<h1>Hello CrackIT</h1>`);

  css = signal(`
h1{
    color:#2563eb;
    text-align:center;
}
`);

  javascript = signal(`
console.log("Hello CrackIT");
`);


}