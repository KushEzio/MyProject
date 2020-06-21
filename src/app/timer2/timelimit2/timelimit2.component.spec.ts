import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Timelimit2Component } from './timelimit2.component';

describe('Timelimit2Component', () => {
  let component: Timelimit2Component;
  let fixture: ComponentFixture<Timelimit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Timelimit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Timelimit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
