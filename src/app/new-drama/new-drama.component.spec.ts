import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDramaComponent } from './new-drama.component';

describe('NewDramaComponent', () => {
  let component: NewDramaComponent;
  let fixture: ComponentFixture<NewDramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
