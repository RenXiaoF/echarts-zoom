import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('optionBar01Echart', { static: false }) optionBar01Echart: ElementRef;
  @ViewChild('optionPie01Echart', { static: false }) optionPie01Echart: ElementRef;
  @ViewChild('optionPie02Echart', { static: false }) optionPie02Echart: ElementRef;
  @ViewChild('optionBar02Echart', { static: false }) optionBar02Echart: ElementRef;
  @ViewChild('pinlvEchart', { static: false }) pinlvEchart: ElementRef;

  // 柱状图 bar 原始数据 30%  （时间）
  optionBar01 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {          // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      show: false
    },
    grid: {
      top: 30,
      left: 20,
      right: 20,
      bottom: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          fontSize: 10,
          textStyle: {
            color: '#fff'
          }
        },
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: '#fff',
            width: '1'
          }
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
      },
      // 自定义红线
      {
        type: 'category',
        offset: -10,   // 偏离当前位置
        z: 100,        // 渲染层级
        axisLine: {
          lineStyle: {
            color: '#E40100',
            width: 1
          }
        }
      },
      // 自定义红线
      {
        type: 'category',
        offset: -105,   // 偏离当前位置
        z: 100,         // 渲染层级
        axisLine: {
          lineStyle: {
            color: '#0187F6',
            width: 1
          }
        }
      }
    ],
    yAxis: [
      // 原 y轴 刻度数值
      {
        type: 'value',
        min: 0,
        max: 350,
        splitNumber: 7,
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        axisLabel: {
          formatter: '{value}',
          fontSize: 8,
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: '#fff',
            width: '1'
          }
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '实际时间',
        type: 'bar',
        stack: '时间',
        barWidth: 8,
        itemStyle: {
          color: '#A568B5'
        },
        data: [20, 55, 40, 134, 111, 42, 30, 22, 66, 11, 22, 47, 15, 38, 15]
      },
      {
        name: '标准时间',
        type: 'bar',
        stack: '时间',
        barWidth: 8,
        itemStyle: {
          color: '#DFDFDF'
        },
        data: [30, 77, 80, 60, 54, 34, 100, 33, 77, 22, 22, 58, 40, 30, 78]
      },
      {
        name: '预估时间',
        type: 'bar',
        stack: '时间',
        barWidth: 8,
        itemStyle: {
          color: '#F4905E'
        },
        data: [40, 20, 77, 44, 7, 444, 200, 80, 20, 66, 77, 24, 99, 44, 66]
      }
    ]
  };
  // 饼状图 pie 原始数据 20%  （问题）
  optionPie01List = [
    { value: 0, name: '-' },
    { value: 0, name: '-' },
    { value: 0, name: '-' },
    { value: 0, name: '-' }
  ];
  optionPie01 = {
    color: ['#9ACB70', '#20AAFD', '#FF6C00', '#FED147'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    grid: {
      bottom: 10,
      containLabel: true
    },
    legend: {
      x: 'center',
      bottom: 16,
      icon: 'rect',
      itemWidth: 6,
      itemHeight: 6,
      textStyle: {
        color: '#fff',
        fontSize: 6,
        offset: 2
      },
      data: this.optionPie01List.map((item: any) => {
        return item.name;
      })
    },
    series: [
      {
        name: '问题',
        type: 'pie',
        radius: '70%',
        center: ['50%', '50%'],
        label: {
          normal: {
            position: 'inner',
            formatter: '{d}%',
          }
        },
        data: this.optionPie01List,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  // 饼状图 02 pie 原始数据 20% （设备状态统计）
  deciveData = {
    deciveTotalNum: 0,
    lastMonthAddNum: 0,
    addPrecent: '0'
  };
  optionPie02List = [
    { value: 0, name: '-' },
    { value: 0, name: '-' }
  ];
  optionPie02 = {
    color: ['#E61E13', '#6FEC6F'],
    title: {
      text: '本月设备状态统计',
      textStyle: {
        color: '#fff',
        fontSize: 9
      },
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        name: '本月设备状态统计',
        type: 'pie',
        radius: '40%',
        center: ['50%', '50%'],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        label: {
          fontSize: 5  // 提示信息字体大小
        },
        labelLine: {
          length: 2 // 提示线长度
        },
        data: this.optionPie02List,
      }
    ]
  };
  // 柱状图 02 bar 原始数据 （监测统计）
  optionBarList1 = [];
  optionBarList2 = [];
  optionBar02 = {
    title: {
      text: '2018年前半年监测统计',
      left: 'left',
      textStyle: {
        color: '#fff',
        fontSize: 9
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      width: 110,
      top: 30,
      left: 10,
      right: -10,
      bottom: 60,
      containLabel: true
    },
    legend: {
      bottom: 40,
      itemHeight: 5,
      align: 'left',
      textStyle: {
        color: '#fff',
        fontSize: 5
      },
      data: [ // 示例设置
        { name: '正面占比', icon: 'rect' },
        { name: '同期占比', icon: 'circle' }
      ]
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,  // 强制渲染文字
          formatter: '{value}',
          fontSize: 7,
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            type: 'solid',
            color: '#fff', // 左边线的颜色
            width: '1' // 坐标线的宽度
          }
        },
        axisPointer: {
          type: 'shadow'
        },
        data: ['一月', '二月', '三月', '四月', '五月', '六月']
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: '#fff' // 左边线的颜色
          }
        },
        splitLine: {  // 分割线设置
          show: false
        }
      },
      {
        show: false
      }
    ],
    series: [
      {
        name: '正面占比',
        type: 'bar',
        barWidth: 6,
        itemStyle: {
          color: '#05FFFE'
        },
        data: this.optionBarList1
      },
      {
        name: '同期占比',
        type: 'line',
        yAxisIndex: 1,
        lineStyle: {
          color: '#D65540'
        },
        data: this.optionBarList2
      }
    ]
  };
  // 频率
  gudingPinlv = 300;
  pinlvList = [
    { name: '-', value: 0 },
    { name: '-', value: 0 },
    { name: '-', value: 0 },
    { name: '-', value: 0 },
    { name: '-', value: 0 }
  ];
  pinlvOption = {
    grid: {
      top: 15,
      left: 18,
      right: 33,
      height: 70
    },
    xAxis: {
      show: false,
      boundaryGap: false
    },
    yAxis: {
      type: 'category',
      inverse: true,  // 反向坐标轴
      axisLabel: {
        color: '#fff',
        fontSize: 7,
        margin: 5,
        padding: [2, 0, 0, 0]
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      data: this.pinlvList.map((item: any) => {
        return item.name;
      })
    },
    series: [{
      type: 'bar',
      barWidth: 8,
      label: {
        show: true,
        position: [63, 1],  // 右边数值位置，可使用 number 或 百分比
        color: '#fff',
        fontSize: 7
      },
      itemStyle: {
        normal: {
          color: (params: any) => { // 自定义颜色
            const colorList = ['#168DDD', '#F4905E', '#05FFFE', '#FED24B', '#7E84F2'];
            return colorList[params.dataIndex];
          },
          barBorderRadius: 10
        }
      },
      data: this.pinlvList.map((item: any) => { // 动态数据
        return item.value;
      })
    }, {
      type: 'bar',
      barGap: '-100%',
      barWidth: 8,
      color: 'transparent',
      itemStyle: {
        normal: {
          borderColor: '#02C1EC',
          borderWidth: 1,
          barBorderRadius: 10
        }
      },
      data: this.pinlvList.map(() => {  // 固定数据
        return this.gudingPinlv;
      })
    }]
  };
  // 开关设置数据
  settingData = {
    onenOffNum: 0,
    temp: '-',
    shidu: '-',
    xinhao: '-',
    light: '-'
  };
  // 维修
  repairDataList = [
    { time: '-', userName: '-', phone: '-', hotNum: 0 },
    { time: '-', userName: '-', phone: '-', hotNum: 0 },
    { time: '-', userName: '-', phone: '-', hotNum: 0 },
    { time: '-', userName: '-', phone: '-', hotNum: 0 },
    { time: '-', userName: '-', phone: '-', hotNum: 0 }
  ];

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/device-data.json').subscribe((res: any) => {
      const { shijianModule, clothesProblemModule, deciveStatusModule, jianceModule, pinlvModule, settingModule, repairModule } = res;

      // 时间
      const optionBar01Echart = echarts.init(this.optionBar01Echart.nativeElement);
      this.optionBar01.series[0].data = shijianModule.dataList1;
      this.optionBar01.series[1].data = shijianModule.dataList2;
      this.optionBar01.series[2].data = shijianModule.dataList3;
      optionBar01Echart.setOption(this.optionBar01);

      // 问题
      const optionPie01Echart = echarts.init(this.optionPie01Echart.nativeElement);
      this.optionPie01.legend.data = clothesProblemModule.dataList.map((item: any) => {
        return item.name;
      });
      this.optionPie01.series[0].data = clothesProblemModule.dataList;
      optionPie01Echart.setOption(this.optionPie01);

      // 设备状态统计
      this.deciveData = deciveStatusModule.deciveData;
      const optionPie02Echart = echarts.init(this.optionPie02Echart.nativeElement);
      this.optionPie02.series[0].data = deciveStatusModule.dataList;
      optionPie02Echart.setOption(this.optionPie02);

      // 监测统计
      const optionBar02Echart = echarts.init(this.optionBar02Echart.nativeElement);
      this.optionBar02.series[0].data = jianceModule.dataList1;
      this.optionBar02.series[1].data = jianceModule.dataList2;
      optionBar02Echart.setOption(this.optionBar02);

      // 频率
      this.gudingPinlv = pinlvModule.gudingPinlv;
      const pinlvEchart = echarts.init(this.pinlvEchart.nativeElement);
      this.pinlvOption.yAxis.data = pinlvModule.dataList.map((item: any) => {
        return item.name;
      });
      this.pinlvOption.series[0].data = pinlvModule.dataList.map((item: any) => { // 动态数据
        return item.value;
      });
      this.pinlvOption.series[1].data = pinlvModule.dataList.map(() => {  // 固定数据
        return this.gudingPinlv;
      });
      pinlvEchart.setOption(this.pinlvOption);

      // 开关设置数据
      this.settingData = settingModule;

      // 维护
      this.repairDataList = repairModule.dataList;
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }
}
