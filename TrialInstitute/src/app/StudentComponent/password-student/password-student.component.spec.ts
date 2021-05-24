import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStudentComponent } from './password-student.component';

describe('PasswordStudentComponent', () => {
  let component: PasswordStudentComponent;
  let fixture: ComponentFixture<PasswordStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
