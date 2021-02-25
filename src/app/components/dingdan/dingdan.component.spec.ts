import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DingdanComponent } from './dingdan.component';

describe('DingdanComponent', () => {
  let component: DingdanComponent;
  let fixture: ComponentFixture<DingdanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DingdanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DingdanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
