import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-globalstatus',
  templateUrl: './globalstatus.component.html',
  styleUrls: ['./globalstatus.component.scss']
})
export class GlobalstatusComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('mapEchart', { static: false }) mapEchart: ElementRef;
  @ViewChild('pieEchart', { static: false }) pieEchart: ElementRef;
  @ViewChild('areaEchart', { static: false }) areaEchart: ElementRef;

  // 正中间顶部数据
  dingdanData = {
    allMoney: 0,
    weekDingdan: {
      doneNum: 0,
      untreatedNum: 0
    },
    year: '0',
    online: {
      money: 0,
      peopleNum: 0
    },
    offline: {
      money: 0,
      dingdanNum: 0
    }
  };

  // 中国地图
  mapOption: any = {
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
  // 品类排名
  cateList: string[] = [];
  // 商品排名
  productList: any[] = [
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' },
    { xinghao: '-', bili: '-' }
  ];
  // 顾客肖像分析
  faceList: any[] = [
    { ageRange: '-', bili: '' },
    { ageRange: '-', bili: '' },
    { ageRange: '-', bili: '' },
    { ageRange: '-', bili: '' },
    { ageRange: '-', bili: '' },
    { ageRange: '-', bili: '' }
  ];
  // 用于循环人脸比例图片
  faceBiliLiat: any[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  // 区域排名
  areaList = [
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
    { province: '-', value: 0 },
  ];
  areaColorList = ['#9ACA74', '#FFD34C', '#40B076', '#40D2C5', '#40BEEE', '#A569B3', '#F2494C', '#F4905E'];
  areaOption = {
    xAxis: {
      interval: 0,
      axisLabel: {
        fontSize: 10,
        textStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: this.areaList.map((item: any) => {
        return item.province;
      })
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    grid: {
      top: 30,
      height: 140
    },
    series: [
      {
        type: 'bar',
        itemStyle: {
          normal: {
            // 自定义渐变色
            color: (params: any) => {
              const colorList = this.areaColorList;
              let index = params.dataIndex;
              if (params.dataIndex >= colorList.length) {
                index = params.dataIndex - colorList.length;
              }
              return colorList[index];
            },
            label: {
              show: true,
              position: 'top', // 在上方显示
              textStyle: {
                color: '#09FEFE',
                fontSize: 10
              }
            }
          },
        },
        data: this.areaList.map((item: any) => {
          return item.value;
        })
      }
    ]
  };
  // 饼图
  pieDataList: any[] = [
    { name: '手机', value: 0 },
    { name: '门店', value: 0 },
    { name: 'PC', value: 0 }
  ];
  pieOption = {
    color: ['#41B179', '#FED24B', '#22ADFE'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      show: false,
      data: this.pieDataList.map((item: any) => {
        return item.name;
      })
    },
    series: [
      {
        name: '全渠道订单额比例',
        type: 'pie',
        radius: '75%',
        center: ['50%', '50%'],
        itemStyle: {
          normal: {
            label: {
              position: 'inner',
              formatter: (params: any) => {
                return `${params.name}\r\n${(params.percent - 0)}%`;
              },
              textStyle: {
                color: '#fff',
                fontSize: 12
              }
            },
            labelLine: {
              show: false
            }
          }
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: this.pieDataList,
      }
    ]
  };

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/globalstatus-data.json').subscribe((res: any) => {
      const { dingdanData, mapData, cateList, productList, faceList, areaList, pieDataList } = res.dingdanModule;
      // 更新地图
      this.http.get('./assets/json/china.json').subscribe((mapRes: any) => {
        const mapEchart = echarts.init(this.mapEchart.nativeElement);
        echarts.registerMap('china', mapRes);
        this.mapOption.series[0].data = mapData.dataList1;
        this.mapOption.series[1].data = mapData.dataList2;
        this.mapOption.series[2].data = mapData.dataList3;
        mapEchart.setOption(this.mapOption);
      });
      // 正中间顶部数据
      this.dingdanData = dingdanData;
      // 品类排名
      this.cateList = cateList;
      // 区域排名
      const areaEchart = echarts.init(this.areaEchart.nativeElement);
      this.areaOption.xAxis.data = areaList.map((item: any) => {
        return item.province;
      });
      this.areaOption.series[0].data = areaList.map((item: any) => {
        return item.value;
      });
      areaEchart.setOption(this.areaOption);
      // 饼图
      const pieEchart = echarts.init(this.pieEchart.nativeElement);
      this.pieOption.legend.data = pieDataList.map((item: any) => {
        return item.name;
      });
      this.pieOption.series[0].data = pieDataList;
      pieEchart.setOption(this.pieOption);
      // 商品排名
      this.productList = productList;
      // 顾客画像
      this.faceList = faceList;
    }, (err) => {
      console.log(err);
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }
}
