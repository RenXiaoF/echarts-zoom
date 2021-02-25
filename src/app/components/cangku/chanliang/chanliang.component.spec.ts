import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanliangComponent } from './chanliang.component';

describe('ChanliangComponent', () => {
  let component: ChanliangComponent;
  let fixture: ComponentFixture<ChanliangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanliangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanliangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
