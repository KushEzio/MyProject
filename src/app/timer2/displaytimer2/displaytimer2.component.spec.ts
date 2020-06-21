import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaytimer2Component } from './displaytimer2.component';

describe('Displaytimer2Component', () => {
  let component: Displaytimer2Component;
  let fixture: ComponentFixture<Displaytimer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Displaytimer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Displaytimer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
