import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diaodu',
  templateUrl: './diaodu.component.html',
  styleUrls: ['./diaodu.component.scss']
})
export class DiaoduComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  /**
   * 调度数据
   * 状态: 障碍物报警:1 离线:2 暂停:3
   */
  diaoduDataList = [
    { no: '-', line: '-', position: '-', status: '-' },
    { no: '-', line: '-', position: '-', status: '-' },
    { no: '-', line: '-', position: '-', status: '-' },
    { no: '-', line: '-', position: '-', status: '-' },
    { no: '-', line: '-', position: '-', status: '-' }
  ];

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/work-data.json').subscribe((res: any) => {
      const { dataList } = res.diaoduModule;
      this.diaoduDataList = dataList;
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }

}
