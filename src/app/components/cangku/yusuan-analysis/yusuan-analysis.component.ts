import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-yusuan-analysis',
  templateUrl: './yusuan-analysis.component.html',
  styleUrls: ['./yusuan-analysis.component.scss']
})
export class YusuanAnalysisComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('yusuanAnalysisEchart', { static: false }) yusuanAnalysisEchart: ElementRef;

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
      itemWidth: 30,
      itemHeight: 4,
      data: []
    },
    grid: {
      top: 85,
      show: false
    },
    xAxis: {
      type: 'category',
      show: false
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 3000,
      splitNumber: 3,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#fff'
      }
    },
    series: [
      {
        name: '-',
        type: 'line',
        data: []
      }, {
        name: '-',
        type: 'line',
        data: []
      }
    ]
  };

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/cangku-data.json').subscribe((res: any) => {
      const { title, dataList } = res.module10;
      const echart = echarts.init(this.yusuanAnalysisEchart.nativeElement);
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
