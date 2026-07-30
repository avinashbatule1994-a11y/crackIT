

import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutputPanel } from '../output-panel/output-panel';
import { CodeRunnerService } from '../../../../services/code-runner.service';
import { CommonModule } from '@angular/common';
import { MonacoEditorComponent } from '../monaco-editor/monaco-editor';


@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [FormsModule, CommonModule, OutputPanel, MonacoEditorComponent],
  templateUrl: './code-editor.html',
  styleUrl: './code-editor.scss'
})
export class CodeEditor {
  runner = inject(CodeRunnerService);
  editorCode = signal(`console.log("Hello CrackIT");`);

  output = signal('');

  // runCode() {

  //   this.output.set(

  //     this.runner.run(

  //       this.editorCode()

  //     )

  //   );

  // }

  runCode() {

  const result = this.runner.run(

    this.editorCode()

  );

  this.output.set(result);

}
  resetCode() {

    this.editorCode.set(`console.log("Hello CrackIT");`);

    this.output.set('');

  }

  copyCode() {

    navigator.clipboard.writeText(

      this.editorCode()

    );

  }
}