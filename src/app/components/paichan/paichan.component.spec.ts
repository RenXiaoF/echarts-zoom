import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaichanComponent } from './paichan.component';

describe('PaichanComponent', () => {
  let component: PaichanComponent;
  let fixture: ComponentFixture<PaichanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaichanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaichanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
