import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-huocunyujing',
  templateUrl: './huocunyujing.component.html',
  styleUrls: ['./huocunyujing.component.scss']
})
export class HuocunyujingComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('huocunyujingEchart', { static: false }) huocunyujingEchart: ElementRef;

  avg: 0;
  today: 0;
  option = {
    title: {
      text: '',
      top: 20,
      left: 20,
      textStyle: {
        fontSize: 24,
        color: '#fff'
      }
    },
    series: [
      {
        name: '-',
        type: 'gauge',
        z: 3,
        min: 0,
        max: 220,
        splitNumber: 11,
        radius: '50%',
        center: ['50%', '80%'],
        startAngle: 180,
        endAngle: 0,
        axisLine: {          // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            width: 30,
            color: [[0.4, '#42E445'], [0.5, '#EECD5F'], [1, '#EE493B']] // 每段颜色设置
          }
        },
        axisTick: {          // 坐标轴小标记
          show: false
        },
        splitLine: {         // 分隔线
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [{ value: 0, name: '' }]
      },
    ]
  };

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/cangku-data.json').subscribe((res: any) => {
      const { title, avg, today } = res.module13;
      const echart = echarts.init(this.huocunyujingEchart.nativeElement);
      this.avg = avg;
      this.today = today;
      this.option.title.text = title;
      this.option.series[0].name = title;
      this.option.series[0].data[0].value = today;
      echart.setOption(this.option);
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }
}
