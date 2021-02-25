import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenbuMapComponent } from './fenbu-map.component';

describe('FenbuMapComponent', () => {
  let component: FenbuMapComponent;
  let fixture: ComponentFixture<FenbuMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenbuMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenbuMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
