import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuqinComponent } from './chuqin.component';

describe('ChuqinComponent', () => {
  let component: ChuqinComponent;
  let fixture: ComponentFixture<ChuqinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuqinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuqinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
