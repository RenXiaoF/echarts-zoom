import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-gongjifen',
  templateUrl: './gongjifen.component.html',
  styleUrls: ['./gongjifen.component.scss']
})
export class GongjifenComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('gongjifenEchart', { static: false }) gongjifenEchart: ElementRef;

  option = {
    color: ['#1EB7FB', '#FFDB14', '#7EFEB2', '#FD706E', '#465C74', '#7CFFAC', '#426ADD'],
    title: {
      text: '',
      top: 20,
      textStyle: {
        color: '#09FEFE',
        fontSize: 20
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom: 60,
      textStyle: {
        color: '#fff',
        fontSize: 12
      },
      data: []
    },
    series: [
      {
        name: '-',
        type: 'pie',
        radius: ['18%', '23%'],
        center: ['50%', '40%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold',
          }
        },
        labelLine: {
          show: false
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
      const { title, dataList } = res.module1;
      const echart = echarts.init(this.gongjifenEchart.nativeElement);
      this.option.title.text = title;
      this.option.legend.data = dataList.map((item: any) => item.name);
      this.option.series[0] = {
        ...this.option.series[0],
        name: title,
        data: dataList
      };
      echart.setOption(this.option);
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }
}
