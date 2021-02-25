import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShijixiaolvComponent } from './shijixiaolv.component';

describe('ShijixiaolvComponent', () => {
  let component: ShijixiaolvComponent;
  let fixture: ComponentFixture<ShijixiaolvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShijixiaolvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShijixiaolvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
