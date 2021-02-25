import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenbuBarComponent } from './fenbu-bar.component';

describe('FenbuBarComponent', () => {
  let component: FenbuBarComponent;
  let fixture: ComponentFixture<FenbuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenbuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenbuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
