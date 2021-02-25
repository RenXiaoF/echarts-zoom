import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paichan',
  templateUrl: './paichan.component.html',
  styleUrls: ['./paichan.component.scss']
})
export class PaichanComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  paichanData = {
    todayTotal: 0,
    finish: '0%',
    dingdanStatusList: [
      { name: '加急订单', total: 0, color: '#FFD347' },
      { name: '变更订单', total: 0, color: '#F48F5B' },
      { name: '异常订单', total: 0, color: '#EF494B' }
    ]
  };
  paichanDetailDataList = [
    {
      groupName: 'A',
      peoplelist: [
        { no: 'A1', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A2', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A3', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A4', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A5', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A6', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A7', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A8', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A9', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A10', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A11', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A12', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A13', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A14', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A15', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A16', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A17', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A18', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A19', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'A20', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 }
      ]
    },
    {
      groupName: 'B',
      peoplelist: [
        { no: 'B1', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B2', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B3', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B4', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B5', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B6', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B7', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B8', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B9', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B10', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B11', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B12', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B13', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B14', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B15', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B16', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B17', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B18', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B19', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'B20', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 }
      ]
    },
    {
      groupName: 'C',
      peoplelist: [
        { no: 'C1', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C2', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C3', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C4', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C5', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C6', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C7', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C8', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C9', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C10', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C11', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C12', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C13', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C14', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C15', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C16', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C17', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C18', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C19', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'C20', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 }
      ]
    },
    {
      groupName: 'D',
      peoplelist: [
        { no: 'D1', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D2', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D3', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D4', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D5', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D6', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D7', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D8', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D9', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D10', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D11', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D12', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D13', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D14', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D15', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D16', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D17', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D18', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D19', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'D20', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 }
      ]
    },
    {
      groupName: 'E',
      peoplelist: [
        { no: 'E1', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E2', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E3', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E4', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E5', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E6', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E7', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E8', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E9', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E10', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E11', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E12', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E13', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E14', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E15', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E16', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E17', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E18', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E19', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'E20', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 }
      ]
    },
    {
      groupName: 'F',
      peoplelist: [
        { no: 'F1', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F2', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F3', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F4', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F5', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F6', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F7', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F8', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F9', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F10', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F11', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F12', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F13', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F14', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F15', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F16', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F17', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F18', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F19', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 },
        { no: 'F20', name: '空缺', v1: 0, v2: 0, v3: 0, v4: 0, status: 1 }
      ]
    }
  ];

  // 工人排名
  peopleDataList = [
    { no: '-', userName: '-', total: '-' },
    { no: '-', userName: '-', total: '-' },
    { no: '-', userName: '-', total: '-' }
  ];
  // 返工率
  backDataList = [
    { workName: '-', userName: '-', backTotal: '-', precent: '-' },
    { workName: '-', userName: '-', backTotal: '-', precent: '-' },
    { workName: '-', userName: '-', backTotal: '-', precent: '-' }
  ];
  // 在制品积压
  jiyaDataList = [
    { no: '-', userName: '-', jiyaTotal: '-', precent: '-' },
    { no: '-', userName: '-', jiyaTotal: '-', precent: '-' },
    { no: '-', userName: '-', jiyaTotal: '-', precent: '-' }
  ];

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/work-data.json').subscribe((res: any) => {
      const { paichanData, paichanDetailDataList, peopleDataList, backDataList, jiyaDataList } = res.paichanModule;
      this.paichanData = paichanData;
      this.paichanDetailDataList = paichanDetailDataList;
      this.peopleDataList = peopleDataList;
      this.backDataList = backDataList;
      this.jiyaDataList = jiyaDataList;
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }
}
