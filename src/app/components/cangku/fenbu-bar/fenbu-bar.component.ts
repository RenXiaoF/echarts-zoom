import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-fenbu-bar',
  templateUrl: './fenbu-bar.component.html',
  styleUrls: ['./fenbu-bar.component.scss']
})
export class FenbuBarComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('fenbuBarEchart', { static: false }) fenbuBarEchart: ElementRef;

  fenbuBarDataList = [];
  option = {
    color: ['#3398DB'],
    title: {
      text: '',
      top: 20,
      textStyle: {
        color: '#09FEFE',
        fontSize: 20
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: 100,
      right: 100,
      bottom: 60,
      containLabel: false
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
          length: 100
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 10
        },
        data: []
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '人',
        min: 0,
        max: 5000,
        splitNumber: 5,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 10
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '人数',
        type: 'bar',
        barWidth: '40%',
        data: []
      }
    ]
  };

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/cangku-data.json').subscribe((res: any) => {
      const { title, dataList } = res.module5;
      const echart = echarts.init(this.fenbuBarEchart.nativeElement);
      this.option.title.text = title;
      this.option.xAxis[0].data = dataList.map((item: any) => item.name);
      this.option.series[0].data = dataList.map((item: any) => item.value);
      echart.setOption(this.option);
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }

}
