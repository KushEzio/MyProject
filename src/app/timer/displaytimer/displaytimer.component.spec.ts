import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytimerComponent } from './displaytimer.component';

describe('DisplaytimerComponent', () => {
  let component: DisplaytimerComponent;
  let fixture: ComponentFixture<DisplaytimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaytimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
