import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDramaComponent } from './comment-drama.component';

describe('CommentDramaComponent', () => {
  let component: CommentDramaComponent;
  let fixture: ComponentFixture<CommentDramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentDramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
