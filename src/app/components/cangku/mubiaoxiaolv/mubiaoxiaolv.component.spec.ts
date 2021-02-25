import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MubiaoxiaolvComponent } from './mubiaoxiaolv.component';

describe('MubiaoxiaolvComponent', () => {
  let component: MubiaoxiaolvComponent;
  let fixture: ComponentFixture<MubiaoxiaolvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MubiaoxiaolvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MubiaoxiaolvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
