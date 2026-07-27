import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-progress-card',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
  ],
  templateUrl: './progress-card.html',
  styleUrl: './progress-card.scss'
})
export class ProgressCardComponent {

  completed = 72;

  doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [72, 28],
        backgroundColor: [
          '#6366f1',
          '#e5e7eb'
        ],
        borderWidth: 0,
        hoverOffset: 5
      }
    ]
  };

  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,

    cutout: '75%',

    plugins: {
      legend: {
        display: false
      },

      tooltip: {
        enabled: true
      }
    }
  };

}