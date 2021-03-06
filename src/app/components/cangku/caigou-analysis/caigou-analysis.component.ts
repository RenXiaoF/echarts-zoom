import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-caigou-analysis',
  templateUrl: './caigou-analysis.component.html',
  styleUrls: ['./caigou-analysis.component.scss']
})
export class CaigouAnalysisComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('caigouAnalysisEchart', { static: false }) caigouAnalysisEchart: ElementRef;

  option = {
    color: ['#01FBF7', '#F48F5C'],
    title: {
      text: '',
      top: 20,
      left: 'center',
      textStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    legend: {
      top: 50,
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 12
      },
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      data: []
    },
    grid: {
      top: 85
    },
    xAxis: [
      {
        type: 'category',
        axisPointer: {
          type: 'shadow'
        },
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
        },
        data: ['1月', '2月', '4月', '6月', '8月', '11月', '12月']
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 100,
        interval: 10,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      }
    ],
    series: [
      {
        barMaxWidth: '20',
        itemStyle: { normal: { label: { show: false } } },
        name: '-',
        type: 'bar',
        data: []
      }, {
        barMaxWidth: '20',
        itemStyle: { normal: { label: { show: false } } },
        name: '-',
        type: 'bar',
        data: []
      }
    ]
  };

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/cangku-data.json').subscribe((res: any) => {
      const { title, dataList } = res.module9;
      const echart = echarts.init(this.caigouAnalysisEchart.nativeElement);
      this.option.title.text = title;
      this.option.legend.data = dataList.map((item: any) => item.name);
      this.option.series = this.option.series.map((item: any, index: number) => {
        return {
          ...item,
          name: dataList[index].name,
          data: dataList[index].list
        };
      });
      echart.setOption(this.option);
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }

}
