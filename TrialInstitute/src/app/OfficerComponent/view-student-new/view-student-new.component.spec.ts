import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentNewComponent } from './view-student-new.component';

describe('ViewStudentNewComponent', () => {
  let component: ViewStudentNewComponent;
  let fixture: ComponentFixture<ViewStudentNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
