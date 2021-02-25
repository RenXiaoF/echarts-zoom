import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-caigouliang-analysis',
  templateUrl: './caigouliang-analysis.component.html',
  styleUrls: ['./caigouliang-analysis.component.scss']
})
export class CaigouliangAnalysisComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('caigouliangAnalysisEchart', { static: false }) caigouliangAnalysisEchart: ElementRef;

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
        type: 'value',
        axisPointer: {
          type: 'shadow'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        },
        data: ['1月', '2月', '4月', '6月', '8月', '11月', '12月']
      }
    ],
    yAxis: [
      {
        type: 'category',
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
        data: []
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
      const { title, typeList, dataList } = res.module11;
      const echart = echarts.init(this.caigouliangAnalysisEchart.nativeElement);
      this.option.title.text = title;
      this.option.legend.data = dataList.map((item: any) => item.name);
      this.option.yAxis[0].data = typeList;
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
