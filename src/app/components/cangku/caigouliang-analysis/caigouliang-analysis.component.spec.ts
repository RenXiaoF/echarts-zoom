import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaigouliangAnalysisComponent } from './caigouliang-analysis.component';

describe('CaigouliangAnalysisComponent', () => {
  let component: CaigouliangAnalysisComponent;
  let fixture: ComponentFixture<CaigouliangAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaigouliangAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaigouliangAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
