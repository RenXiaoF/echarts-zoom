import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-shijixiaolv',
  templateUrl: './shijixiaolv.component.html',
  styleUrls: ['./shijixiaolv.component.scss']
})
export class ShijixiaolvComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('shijixiaolvEchart', { static: false }) shijixiaolvEchart: ElementRef;

  shijixiaolvDataList = [];
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
      top: 100,
      left: 60,
      right: 60,
      bottom: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [],
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          color: '#fff'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '人',
        min: 0,
        max: 100,
        splitNumber: 10,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#fff',

          }
        },
        axisLabel: {
          color: '#fff'
        }
      }
    ],
    series: [
      {
        name: '人数',
        type: 'bar',
        barWidth: '50%',
        data: this.shijixiaolvDataList
      }
    ]
  };

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/cangku-data.json').subscribe((res: any) => {
      const { title, dataList } = res.module6;
      const echart = echarts.init(this.shijixiaolvEchart.nativeElement);
      this.option.title.text = title;
      this.option.xAxis[0].data = dataList.map((item: any) => item.name);
      this.option.series[0].data = dataList.map((item: any) => item.value);
      echart.setOption(this.option);
    });
  }

  // 更新数据
  refleshData(dataObj: any) {
    this.getData();
  }

}
