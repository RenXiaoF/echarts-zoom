import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuocunjiegouComponent } from './huocunjiegou.component';

describe('HuocunjiegouComponent', () => {
  let component: HuocunjiegouComponent;
  let fixture: ComponentFixture<HuocunjiegouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuocunjiegouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuocunjiegouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
