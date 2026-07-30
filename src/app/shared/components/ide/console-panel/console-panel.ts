import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-console-panel',
  standalone: true,
  templateUrl: './console-panel.html',
  styleUrl: './console-panel.scss'
})
export class ConsolePanel {

  // Console output
  output = input<string>('');

  // Emit event when Clear button is clicked
  clear = output<void>();

  clearConsole() {
    this.clear.emit();
  }

}