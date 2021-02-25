import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chanliang',
  templateUrl: './chanliang.component.html',
  styleUrls: ['./chanliang.component.scss']
})
export class ChanliangComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('chanliangEchart', { static: false }) chanliangEchart: ElementRef;

  chanliangDataList = [];
  option = {
    color: ['#1EB7FB', '#FFDB14', '#7EFEB2', '#FD706E', '#465C74'],
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
      orient: 'vertical',
      right: 0,
      bottom: 60,
      textStyle: {
        color: '#fff',
        fontSize: 12
      },
      data: this.chanliangDataList.map((item: any) => {
        return item.name;
      })
    },
    series: [
      {
        name: '累计产量',
        type: 'pie',
        radius: ['25%', '40%'],
        top: 30,
        left: -80,
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold',
          }
        },
        labelLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        data: this.chanliangDataList
      }
    ]
  };

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/cangku-data.json').subscribe((res: any) => {
      const { title, dataList } = res.module8;
      const echart = echarts.init(this.chanliangEchart.nativeElement);
      this.option.title.text = title;
      this.option.legend.data = dataList.map((item: any) => item.name);
      this.option.series[0].data = dataList;
      echart.setOption(this.option);
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }
}
