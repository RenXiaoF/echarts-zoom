import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuocunyujingComponent } from './huocunyujing.component';

describe('HuocunyujingComponent', () => {
  let component: HuocunyujingComponent;
  let fixture: ComponentFixture<HuocunyujingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuocunyujingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuocunyujingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
