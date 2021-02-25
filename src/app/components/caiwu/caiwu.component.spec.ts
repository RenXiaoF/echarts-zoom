import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaiwuComponent } from './caiwu.component';

describe('CaiwuComponent', () => {
  let component: CaiwuComponent;
  let fixture: ComponentFixture<CaiwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaiwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaiwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
