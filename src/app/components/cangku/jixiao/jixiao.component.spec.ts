import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JixiaoComponent } from './jixiao.component';

describe('JixiaoComponent', () => {
  let component: JixiaoComponent;
  let fixture: ComponentFixture<JixiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JixiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JixiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
