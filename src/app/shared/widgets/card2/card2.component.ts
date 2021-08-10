import { Component, OnInit, Input } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
})
export class Card2Component implements OnInit {
  @Input() label!: string;
  @Input() total!: string;
  @Input() percentage!: string;
  @Input() data: any = [];

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      accessibility: {
        description: null,
      },
      title: {
        text: null,
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      exporting: {
        enabled: false,
      },

      yAxis: {
        title: {
          text: null,
        },
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      series: [
        {
          name: 'Growth',
          data: [1500, 3000, 5000, 7000, 9000, 12000, 13000],
        },
      ],
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
