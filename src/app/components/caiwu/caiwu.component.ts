import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-caiwu',
  templateUrl: './caiwu.component.html',
  styleUrls: ['./caiwu.component.scss']
})
export class CaiwuComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  @ViewChild('bar1Echart', { static: false }) bar1Echart: ElementRef;
  @ViewChild('bar2Echart', { static: false }) bar2Echart: ElementRef;
  @ViewChild('bar3Echart', { static: false }) bar3Echart: ElementRef;
  @ViewChild('line1Echart', { static: false }) line1Echart: ElementRef;
  @ViewChild('line2Echart', { static: false }) line2Echart: ElementRef;
  @ViewChild('line3Echart', { static: false }) line3Echart: ElementRef;

  caiwuData = {
    title: '财务',
    topData: [
      {
        text: '资产总额',
        right: {
          digital: '-',
          growth: '-',
          isCreace: true
        }
      },
      {
        text: '资金存量',
        right: {
          digital: '-',
          growth: '-',
          isCreace: true
        }
      },
      {
        text: '营业收入',
        right: {
          digital: '-',
          growth: '-',
          isCreace: true
        }
      },
      {
        text: '营销费用',
        right: {
          digital: '-',
          growth: '-',
          isCreace: false
        }
      },
      {
        text: '利润总额',
        right: {
          digital: '-',
          growth: '-',
          isCreace: false
        }
      },
      {
        text: '负债总额',
        right: {
          digital: '-',
          growth: '-',
          isCreace: false
        }
      }
    ],
    centerData: ['财务状况', '经营能力', '盈利能力', '运营能力', '偿债能力', '现金流量', '成本费用'],
  };
  // 第1个图形配置
  option1 = {
    textStyle: {
      color: 'white'
    },
    title: {
      text: '-',
      textStyle: {
        color: '#09FEFE',
        fontSize: 8
      },
    },
    color: ['#2db7f5', '#0abe63', '#e27e30', '#c3c3c3'],
    legend: {
      align: 'left',
      left: 10,
      top: 15,
      itemWidth: 5,
      itemGap: 3,
      data: [
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        },
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        },
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        },
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        }
      ],
    },
    grid: {
      top: 40,
      left: 20,
      right: 20,
      bottom: 20
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 5
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      },
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 80,
        interval: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      }
    ],
    series: [
      {
        name: '月度值',
        type: 'bar',
        barWidth: 5,
        data: []
      },
      {
        name: '本年累计值',
        type: 'line',
        yAxisIndex: 1,
        data: [],
        smooth: true,
        symbol: 'none',
      },
      {
        name: '周比年累计完成值',
        type: 'line',
        yAxisIndex: 1,
        data: [],
        symbol: 'none',
      },
      {
        name: '考核值',
        type: 'line',
        yAxisIndex: 1,
        data: [],
        symbol: 'none',
      }
    ]
  };
  // 第2个图形配置
  option2 = {
    textStyle: {
      color: 'white'
    },
    title: {
      text: '-',
      textStyle: {
        color: '#09FEFE',
        fontSize: 8
      },
    },
    color: ['#2db7f5', '#0abe63', '#e27e30', '#c3c3c3'],
    legend: {
      align: 'left',
      left: 10,
      top: 15,
      itemWidth: 5,
      itemGap: 3,
      data: [
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        },
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        },
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        },
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        }
      ],
    },
    grid: {
      top: 40,
      left: 20,
      right: 20,
      bottom: 20
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 5
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      },
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 80,
        interval: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      }
    ],
    series: [
      {
        name: '月度值',
        type: 'bar',
        barWidth: 5,
        data: []
      },
      {
        name: '本年累计值',
        type: 'line',
        yAxisIndex: 1,
        data: [],
        smooth: true,
        symbol: 'none',
      },
      {
        name: '周比年累计完成值',
        type: 'line',
        yAxisIndex: 1,
        data: [],
        symbol: 'none',
      },
      {
        name: '考核值',
        type: 'line',
        yAxisIndex: 1,
        data: [],
        symbol: 'none',
      }
    ]
  };
  // 第3个图形配置
  option3 = {
    textStyle: {
      color: 'white'
    },
    title: {
      text: '-',
      textStyle: {
        color: '#09FEFE',
        fontSize: 8
      },
    },
    color: ['#2db7f5', '#0abe63', '#e27e30', '#c3c3c3'],
    legend: {
      align: 'left',
      left: 10,
      top: 15,
      itemWidth: 5,
      itemGap: 3,
      data: [
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        },
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        },
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        },
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 4 },
        }
      ],
    },
    grid: {
      top: 40,
      left: 20,
      right: 20,
      bottom: 20
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 5
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      },
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 80,
        interval: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      }
    ],
    series: [
      {
        name: '月度值',
        type: 'bar',
        barWidth: 5,
        data: []
      },
      {
        name: '本年累计值',
        type: 'line',
        yAxisIndex: 1,
        data: [],
        smooth: true,
        symbol: 'none',
      },
      {
        name: '周比年累计完成值',
        type: 'line',
        yAxisIndex: 1,
        data: [],
        symbol: 'none',
      },
      {
        name: '考核值',
        type: 'line',
        yAxisIndex: 1,
        data: [],
        symbol: 'none',
      }
    ]
  };
  // 第4个图形配置
  option4 = {
    textStyle: {
      color: 'white'
    },
    title: {
      text: '资产总数',
      textStyle: {
        color: '#09FEFE',
        fontSize: 8
      },
    },
    color: ['#2db7f5'],
    legend: {
      top: '10%',
      itemWidth: 5,
      itemGap: 3,
      data: [
        {
          name: '-',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 6 },
        }
      ],
    },
    grid: {
      top: 40,
      left: 20,
      right: 20,
      bottom: 20
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 5
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      },
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 80,
        interval: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      }
    ],
    series: [
      {
        name: '周末数',
        type: 'line',
        yAxisIndex: 1,
        data: [],
        smooth: true,
        symbol: 'none',
      }
    ]
  };
  // 第5个图形配置
  option5 = {
    textStyle: {
      color: 'white'
    },
    title: {
      text: '债产总数',
      textStyle: {
        color: '#09FEFE',
        fontSize: 8
      },
    },
    color: ['#2db7f5'],
    legend: {
      top: '10%',
      itemWidth: 5,
      itemGap: 3,
      data: [
        {
          name: '周末数',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 6 },
        }
      ],
    },
    grid: {
      top: 40,
      left: 20,
      right: 20,
      bottom: 20
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 5
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      },
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 80,
        interval: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      }
    ],
    series: [
      {
        name: '周末数',
        type: 'line',
        yAxisIndex: 1,
        data: [0, 45, 25, 30, 61, 44, 77, 50, 33, 55, 11, 78],
        smooth: true,
        symbol: 'none',
      }
    ]
  };
  // 第6个图形配置
  option6 = {
    textStyle: {
      color: 'white'
    },
    title: {
      text: '所有者权益',
      textStyle: {
        color: '#09FEFE',
        fontSize: 8
      },
    },
    color: ['#2db7f5'],
    legend: {
      top: '10%',
      itemWidth: 5,
      itemGap: 3,
      data: [
        {
          name: '周末数',
          icon: 'circle',
          textStyle: { color: 'white', fontSize: 6 },
        }
      ],
    },
    grid: {
      top: 40,
      left: 20,
      right: 20,
      bottom: 20
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 5
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      },
      {
        type: 'value',
        name: '亿元',
        min: 0,
        max: 80,
        interval: 10,
        nameTextStyle: { fontSize: 6, color: '#cccc' },
        splitLine: { show: false },
        nameGap: 3,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 6,
          margin: 4
        }
      }
    ],
    series: [
      {
        name: '周末数',
        type: 'line',
        yAxisIndex: 1,
        data: [0, 45, 25, 30, 61, 44, 77, 50, 33, 55, 11, 78],
        smooth: true,
        symbol: 'none',
      }
    ]
  };

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/caiwu-data.json').subscribe((res: any) => {
      const { caiwuData, barData, lineData } = res;
      this.caiwuData = caiwuData;
      // 柱形图
      // 第一个柱形图
      const bar1Echart = echarts.init(this.bar1Echart.nativeElement);
      this.option1.title.text = barData.option1Data.title;
      this.option1.legend.data = this.option1.legend.data.map((item: any, index: number) => {
        return {
          ...item,
          name: barData.option1Data.legendList[index]
        };
      });
      this.option1.series = this.option1.series.map((item: any, index: number) => {
        return { ...item, data: barData.option1Data[`dataList${index + 1}`] };
      });
      bar1Echart.setOption(this.option1);

      // 第二个柱形图
      const bar2Echart = echarts.init(this.bar2Echart.nativeElement);
      this.option2.title.text = barData.option2Data.title;
      this.option2.legend.data = this.option2.legend.data.map((item: any, index: number) => {
        return {
          ...item,
          name: barData.option2Data.legendList[index]
        };
      });
      this.option2.series = this.option2.series.map((item: any, index: number) => {
        return { ...item, data: barData.option2Data[`dataList${index + 1}`] };
      });
      bar2Echart.setOption(this.option2);

      // 第三个柱形图
      const bar3Echart = echarts.init(this.bar3Echart.nativeElement);
      this.option3.title.text = barData.option3Data.title;
      this.option3.legend.data = this.option3.legend.data.map((item: any, index: number) => {
        return {
          ...item,
          name: barData.option3Data.legendList[index]
        };
      });
      this.option3.series = this.option3.series.map((item: any, index: number) => {
        return { ...item, data: barData.option3Data[`dataList${index + 1}`] };
      });
      bar3Echart.setOption(this.option3);

      // 线型图
      // 第一个线型图
      const line1Echart = echarts.init(this.line1Echart.nativeElement);
      this.option4.title.text = lineData.option1Data.title;
      this.option4.legend.data = this.option4.legend.data.map((item: any, index: number) => {
        return {
          ...item,
          name: lineData.option1Data.legendList[index]
        };
      });
      this.option4.series = this.option4.series.map((item: any, index: number) => {
        return { ...item, data: lineData.option1Data.dataList };
      });
      line1Echart.setOption(this.option4);

      // 第二个线型图
      const line2Echart = echarts.init(this.line2Echart.nativeElement);
      this.option5.title.text = lineData.option1Data.title;
      this.option5.legend.data = this.option5.legend.data.map((item: any, index: number) => {
        return {
          ...item,
          name: lineData.option1Data.legendList[index]
        };
      });
      this.option5.series = this.option5.series.map((item: any, index: number) => {
        return { ...item, data: lineData.option1Data.dataList };
      });
      line2Echart.setOption(this.option5);

      // 第三个线型图
      const line3Echart = echarts.init(this.line3Echart.nativeElement);
      this.option6.title.text = lineData.option1Data.title;
      this.option6.legend.data = this.option6.legend.data.map((item: any, index: number) => {
        return {
          ...item,
          name: lineData.option1Data.legendList[index]
        };
      });
      this.option6.series = this.option6.series.map((item: any, index: number) => {
        return { ...item, data: lineData.option1Data.dataList };
      });
      line3Echart.setOption(this.option6);
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }
}
