import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Logs2Component } from './logs2.component';

describe('Logs2Component', () => {
  let component: Logs2Component;
  let fixture: ComponentFixture<Logs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Logs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Logs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
