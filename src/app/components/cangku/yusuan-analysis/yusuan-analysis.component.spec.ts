import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YusuanAnalysisComponent } from './yusuan-analysis.component';

describe('YusuanAnalysisComponent', () => {
  let component: YusuanAnalysisComponent;
  let fixture: ComponentFixture<YusuanAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YusuanAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YusuanAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
