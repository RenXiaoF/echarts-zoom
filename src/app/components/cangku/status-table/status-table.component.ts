import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) {
    this.getData();
  }

  yuancailiaoData: {
    title: '',
    yuancailiaoList: [],
    kuanshuList: []
  };
  zhipinData: {
    title: '',
    zhipinList: [
      { name: '-', total: '-' },
      { name: '-', total: '-' },
      { name: '-', total: '-' },
      { name: '-', total: '-' }
    ]
  };

  ngOnInit() {
  }

  // 获取数据
  getData() {
    this.http.get('./assets/json/cangku-data.json').subscribe((res: any) => {
      const { yuancailiaoData, zhipinData } = res.module12;
      this.yuancailiaoData = yuancailiaoData;
      this.zhipinData = zhipinData;
    });
  }

  // 更新数据
  refleshData() {
    this.getData();
  }

}
