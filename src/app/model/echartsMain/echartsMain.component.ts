import { Component, OnInit, ViewChild, ElementRef, HostListener, Renderer2, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/services/api/api.service';
import { NewapiService } from 'src/services/api/newapi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-echarts-main',
  templateUrl: './echartsMain.component.html',
  styleUrls: ['./echartsMain.component.scss']
})
export class EchartsMainComponent implements OnInit, AfterViewInit {
  // 定义子组件的数据集
  constructor(
    // public ApiService: ApiService,
    // public NewapiService: NewapiService,
    public http: HttpClient,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // //获取布局接口
    // if (IS_DEBUG) { // 如果是测试则请求接口
    //   this.getkanbanindex();
    // } else { // 如果是正式环境则获取json
    //   this.getjson();
    // }
  }

  @ViewChild('wrap', { static: false }) wrap: ElementRef;

  T: any;

  ngOnInit() {

  }

  // 监听 window.resize 对 整个画面进行缩放
  @HostListener('window:resize', ['$event'])
  onReset(event: any) {
    if (this.T) {
      clearTimeout(this.T);
    }
    this.T = setTimeout(() => {
      // 获取待缩放节点
      const dom = this.el.nativeElement.querySelector('.wrap');
      const windowWidth = window.innerWidth;
      const scale = (windowWidth || 1920) / 1920;
      this.renderer.setStyle(dom, 'transform', `scale(${scale})`);
    }, 300);
  }

  ngAfterViewInit(): void {
    // 网页加载完成重置画面
    this.onReset(true);

    const paiChanSection = this.el.nativeElement.querySelector('.paichan-section');
    const paichan = this.el.nativeElement.querySelector('.paichan');
    const paichanScale = 480 / 1920;
    this.renderer.setStyle(paichan, 'position', `absolute`);
    this.renderer.setStyle(paichan, 'top', `0`);
    this.renderer.setStyle(paichan, 'left', `0`);
    this.renderer.setStyle(paichan, 'transform', `scale(${paichanScale})`);
    this.renderer.setStyle(paiChanSection, 'width', `480px`);
  }

  /**
   * 读取json数据
   */
  getjson() {
    const url = 'assets/data.json';
    // console.log(url);
    // this.http.get(url).subscribe(
    //   (data) => {
    //     if (data['state'] == 1) {
    //       // this.magicList = data['result'];
    //       // console.log('读取json数据', this.magicList);
    //     } else if (data['state'] == -1) {
    //       // this.error_msg = '目录下返回的报表配置数据为空,请检查文件:assets/data.json';
    //       // console.log('返回的报表配置数据为空,请检查文件:assets/data.json');
    //     } else {
    //       // this.error_msg = '目录下的json数据格式不对,数据间不能有空格,请检查文件:assets/data.json';
    //       // console.log('json数据格式不对,数据间不能有空格,请检查文件:assets/data.json');
    //     }
    //   }, error => {
    //     // this.error_msg = '目录下的json数据格式不对或不存在,数据间不能有空格,请检查文件:assets/data.json';
    //     // console.log('json数据格式不对,数据间不能有空格,请检查文件:assets/data.json,错误信息是:' + error);
    //   });
  }

  /**
   * 魔法看板查询接口
   * 第一次获取数据写入json文件，获取不到数据直接取json数据，json数据用id区分
   */
  getkanbanindex() {
    // this.ApiService.postFormData('index/kanbanindex', { id: this.kanban_id }).subscribe(
    //   (res: any) => {
    //     if (res.state == 1) {
    //       // console.log('newkanban主页面', res);
    //       this.magicList = this.dataList = res.result;
    //     } else if (res.state == -1) {
    //       // this.error_msg = '返回的报表配置数据为空,请检查接口:index/kanbanindex';
    //       // console.log('返回的报表配置数据为空,请检查接口:index/kanbanindex');
    //     } else {
    //       // this.error_msg = 'json数据格式不对,数据间不能有空格,请检查接口:index/kanbanindex';
    //       // console.log('json数据格式不对,数据间不能有空格,请检查接口:index/kanbanindex');
    //     }
    //   }, (err) => {

    //     // this.error_msg = 'json数据格式不对或不存在,数据间不能有空格,请检查接口:index/kanbanindex';
    //     // console.log('json数据格式不对,数据间不能有空格,请检查接口:index/kanbanindex,错误信息是:' + // this.error_msg);

    //     // this.error_msg = 'json数据格式不对或不存在,数据间不能有空格,请检查接口:index/kanbanindex';
    //     // console.log('json数据格式不对,数据间不能有空格,请检查接口:index/kanbanindex,错误信息是:' + // this.error_msg);

    //     // this.error_msg = 'json数据格式不对或不存在,数据间不能有空格,请检查接口:index/kanbanindex';
    //     // console.log('json数据格式不对,数据间不能有空格,请检查接口:index/kanbanindex,错误信息是:' + // this.error_msg);

    //   }
    // );
  }
}
