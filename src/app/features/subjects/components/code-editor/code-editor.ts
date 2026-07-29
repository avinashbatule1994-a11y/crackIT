// import { Component, input } from '@angular/core';

// @Component({
//   selector:'app-code-editor',
//   standalone:true,
//   templateUrl:'./code-editor.html',
//   styleUrl:'./code-editor.scss'
// })
// export class CodeEditor{

// examples=input<any[]>([]);

// }

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './code-editor.html',
  styleUrl: './code-editor.scss'
})
export class CodeEditor {

  code = signal(`function greet(){

console.log("Hello Angular");

}

greet();`);

  reset() {

    this.code.set(`function greet(){

console.log("Hello Angular");

}

greet();`);

  }

  copy() {

    navigator.clipboard.writeText(this.code());

  }

}