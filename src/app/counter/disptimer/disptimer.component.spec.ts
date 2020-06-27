import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisptimerComponent } from './disptimer.component';

describe('DisptimerComponent', () => {
  let component: DisptimerComponent;
  let fixture: ComponentFixture<DisptimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisptimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisptimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
