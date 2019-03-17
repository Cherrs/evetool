import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressoptionComponent } from './expressoption.component';

describe('ExpressoptionComponent', () => {
  let component: ExpressoptionComponent;
  let fixture: ComponentFixture<ExpressoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
