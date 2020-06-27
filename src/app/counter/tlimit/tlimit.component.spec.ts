import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlimitComponent } from './tlimit.component';

describe('TlimitComponent', () => {
  let component: TlimitComponent;
  let fixture: ComponentFixture<TlimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
