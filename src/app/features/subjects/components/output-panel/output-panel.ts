import { Component, input } from '@angular/core';

@Component({
  selector: 'app-output-panel',
  imports: [],
  templateUrl: './output-panel.html',
  styleUrl: './output-panel.scss',
})
export class OutputPanel {
  output=input('');
}
