import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByStudentIdComponent } from './view-by-student-id.component';

describe('ViewByStudentIdComponent', () => {
  let component: ViewByStudentIdComponent;
  let fixture: ComponentFixture<ViewByStudentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByStudentIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByStudentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
