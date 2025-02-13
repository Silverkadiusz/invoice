import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  financialSummary: any;
  chartData: any;
  loading: boolean = true;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getDashboardData().subscribe({
      next: (data) => {
        this.financialSummary = data.summary;
        this.chartData = {
          labels: ['Dzisiaj', '7 dni', 'Miesiąc', 'Rok'],
          datasets: [
            {
              label: 'Przychody',
              data: [data.summary.today, data.summary.week, data.summary.month, data.summary.year],
              fill: true,
              borderColor: '#4CAF50',
              backgroundColor: 'rgba(76, 175, 80, 0.2)'
            }
          ]
        };
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}

