import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-jixiao',
  templateUrl: './jixiao.component.html',
  styleUrls: ['./jixiao.component.scss']
})
export class JixiaoComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('jixiaoEchart', { static: false }) jixiaoEchart: ElementRef;

  lineDataList1 = [];
  lineDataList2 = [];
  option = {
    title: {
      text: '',
      top: 20,
      textStyle: {
        color: '#09FEFE',
        fontSize: 20
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false,
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        interval: 3,  // 间隔显示
        color: '#fff',
        fontSize: 16
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 2,
          color: '#fff',
        },
      },
      data: ['CDC', '', '', '', 'SBG', '', '', '', '中国区', '', '', '']
    },
    series: [{
      type: 'line',
      symbol: 'none', // 去掉折线点
      lineStyle: {
        width: 3,
        color: '#01FBF7'
      },
      data: this.lineDataList1
    }, {
      type: 'line',
      symbol: 'none', // 去掉折线点
      lineStyle: {
        width: 3,
        color: '#F48F5C'
      },
      data: this.lineDataList2
    }]
  };

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/cangku-data.json').subscribe((res: any) => {
      const { title } = res.module3;
      const echart = echarts.init(this.jixiaoEchart.nativeElement);
      this.option.title.text = title;
      this.option.series = this.option.series.map((item: any, index: number) => {
        return {
          ...item,
          data: res.module3[`lineDataList${index + 1}`]
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
