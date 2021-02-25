import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaigouAnalysisComponent } from './caigou-analysis.component';

describe('CaigouAnalysisComponent', () => {
  let component: CaigouAnalysisComponent;
  let fixture: ComponentFixture<CaigouAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaigouAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaigouAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
