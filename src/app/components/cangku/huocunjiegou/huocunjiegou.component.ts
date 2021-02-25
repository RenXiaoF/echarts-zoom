import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-huocunjiegou',
  templateUrl: './huocunjiegou.component.html',
  styleUrls: ['./huocunjiegou.component.scss']
})
export class HuocunjiegouComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('huocunjiegouEchart', { static: false }) huocunjiegouEchart: ElementRef;

  option = {
    color: ['#5D98DA', '#F18D57', '#43CEC9', '#FABE11'],
    title: {
      text: '',
      top: 20,
      left: 20,
      textStyle: {
        fontSize: 24,
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      width: 150,
      left: '35%',
      bottom: 20,
      icon: 'circle',
      itemHeight: 9,
      textStyle: {
        color: '#fff'
      },
      data: []
    },
    series: [
      {
        name: '-',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        labelLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: []
      }
    ]
  };

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/cangku-data.json').subscribe((res: any) => {
      const { title, dataList } = res.module14;
      const echart = echarts.init(this.huocunjiegouEchart.nativeElement);
      this.option.title.text = title;
      this.option.legend.data = dataList.map((item: any) => item.name);
      this.option.series = this.option.series.map((item: any, index: number) => {
        return {
          ...item,
          name: title,
          data: dataList
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
