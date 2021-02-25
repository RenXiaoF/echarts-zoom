import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GongjifenComponent } from './gongjifen.component';

describe('GongjifenComponent', () => {
  let component: GongjifenComponent;
  let fixture: ComponentFixture<GongjifenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GongjifenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GongjifenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
