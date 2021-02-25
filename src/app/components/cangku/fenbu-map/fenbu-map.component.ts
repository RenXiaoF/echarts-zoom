import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-fenbu-map',
  templateUrl: './fenbu-map.component.html',
  styleUrls: ['./fenbu-map.component.scss']
})
export class FenbuMapComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('fenbuMapEchart', { static: false }) fenbuMapEchart: ElementRef;

  // 中国地图
  fenbuMapTableData = [];
  option: any = {
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      min: 0,
      max: 2500,
      show: false
    },
    dataRange: {
      show: false,
      color: ['#41B179', '#FBD34B', '#21AEFE']
    },
    series: [
      {
        name: '手机',
        type: 'map',
        mapType: 'china',
        itemStyle: {
          normal: {
            areaStyle: {
              color: '#41B179',
            },
            borderColor: '#fff',
            borderWidth: 1,
            shadowColor: '#41B179'
          },
          emphasis: {
            areaColor: '#fff'
          }
        },
        data: []
      },
      {
        name: '门店',
        type: 'map',
        mapType: 'china',
        itemStyle: {
          normal: {
            areaStyle: {
              color: '#FBD34B',
            },
            borderColor: '#fff',
            borderWidth: 1,
            shadowColor: '#FBD34B'
          },
          emphasis: {
            areaColor: '#fff'
          }
        },
        data: []
      },
      {
        name: 'PC',
        type: 'map',
        mapType: 'china',
        itemStyle: {
          normal: {
            areaStyle: {
              color: '#21AEFE',
            },
            borderColor: '#fff',
            borderWidth: 1,
            shadowColor: '#21AEFE'
          },
          emphasis: {
            areaColor: '#fff'
          }
        },
        data: []
      }
    ]
  };

  ngOnInit() { }

  // 获取数据
  getData() {
    // 加载地图
    this.http.get('./assets/json/china.json').subscribe((res: any) => {
      const echart = echarts.init(this.fenbuMapEchart.nativeElement);
      echarts.registerMap('china', res);
      echart.setOption(this.option);
    });
    this.http.get('./assets/json/cangku-data.json').subscribe((res: any) => {
      const { fenbuMapTableData, mapData } = res.module4;
      this.fenbuMapTableData = fenbuMapTableData;
      const echart = echarts.init(this.fenbuMapEchart.nativeElement);
      this.option.series[0].data = mapData.dataList1;
      this.option.series[1].data = mapData.dataList2;
      this.option.series[2].data = mapData.dataList3;
      echart.setOption(this.option);
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }

}
