import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCommentsComponent } from './row-comments.component';

describe('RowCommentsComponent', () => {
  let component: RowCommentsComponent;
  let fixture: ComponentFixture<RowCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
