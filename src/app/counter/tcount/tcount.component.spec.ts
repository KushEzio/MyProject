import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcountComponent } from './tcount.component';

describe('TcountComponent', () => {
  let component: TcountComponent;
  let fixture: ComponentFixture<TcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
