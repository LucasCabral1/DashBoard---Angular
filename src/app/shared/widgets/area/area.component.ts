import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  public chartOptions: Object = {};

  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: 'Data from Our Company',
      },

      yAxis: {
        title: {
          text: null,
        },
      },

      exporting: {
        enable: true,
      },

      credits: {
        enabled: false,
      },
      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2010 to 2017',
        },
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
      },

      series: this.data,
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
