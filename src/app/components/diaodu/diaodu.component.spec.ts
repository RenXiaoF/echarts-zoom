import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaoduComponent } from './diaodu.component';

describe('DiaoduComponent', () => {
  let component: DiaoduComponent;
  let fixture: ComponentFixture<DiaoduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaoduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaoduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
