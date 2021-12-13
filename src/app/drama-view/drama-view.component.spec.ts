import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaViewComponent } from './drama-view.component';

describe('DramaViewComponent', () => {
  let component: DramaViewComponent;
  let fixture: ComponentFixture<DramaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
