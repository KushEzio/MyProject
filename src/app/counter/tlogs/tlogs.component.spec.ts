import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlogsComponent } from './tlogs.component';

describe('TlogsComponent', () => {
  let component: TlogsComponent;
  let fixture: ComponentFixture<TlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
